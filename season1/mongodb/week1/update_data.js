require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('user_login_data');
  const users = db.collection('login_data');

  // UPDATE Operations (Modify Data)
  // 1. updateOne() - 1 Document Update

  // Example 1: update Rahul age
  await users.updateOne({ name: 'Rahul Kumar' }, { $set: { age: 30 } });

  // Example 2: Multiple fields update
  await users.updateOne(
    { name: 'Rahul Kumar' },
    {
      $set: {
        age: 26,
        city: 'Mumbai',
        phone: '9999999999',
        updatedAt: new Date(),
      },
    }
  );

  // Example 3: Nested field update
  await users.updateOne(
    { name: 'Priya Sharma' },
    { $set: { 'address.city': 'Pune' } }
  );

  //==================================================================================

  // 2. updateMany() - Multiple Documents Update

  // Example 1: active all Delhi users
  await users.updateMany({ city: 'Delhi' }, { $set: { isActive: true } });

  // Example 2: add all users into single field
  await users.updateMany({}, { $set: { subscribed: false } });

  //==================================================================================

  // 3. Update Operators (Very Important!)

  // $set - set/update the value of a field
  await users.updateOne({ name: 'Rahul' }, { $set: { age: 27 } });

  // $unset - Remove field
  await users.updateOne({ name: 'Rahul Kumar' }, { $unset: { age: '' } });

  // $inc - increment/decrement the number
  await users.updateOne(
    { name: 'Rahul Kumar' },
    { $inc: { age: 1 } } // age + 1
  );

  await users.updateOne(
    { name: 'iPhone' },
    { $inc: { stock: -1 } } // stock - 1 (sold)
  );

  // $push - Add item into array
  await users.updateOne(
    { name: 'Rahul Kumar' },
    { $push: { skills: 'MongoDB' } }
  );

  // $push - Add items into array
  await users.updateOne(
    { name: 'Rahul Kumar' },
    { $push: { skills: { $each: ['MongoDB', 'HTML'] } } }
  );

  // $pull - remove item from array
  await users.updateOne({ name: 'Rahul Kumar' }, { $pull: { skills: 'HTML' } });
  // $addToSet - add item into array (can't be duplicated)
  // await users.updateOne({ name: 'Rahul Kumar' }, { $addToSet: { skills: 'React' } });

  //=====================================================================================

  // 4. findOneAndUpdate() - Update & Return
  // return old document by default

  console.log(
    await users.findOneAndUpdate({ name: 'Rahul Kumar' }, { $set: { age: 32 } })
  );

  // return new (updated) document
  console.log(
    await users.findOneAndUpdate(
      { name: 'Rahul Kumar' },
      { $set: { age: 28 } },
      { returnNewDocument: true }
    )
  );

  //=====================================================================================

  // 5. replaceOne() - Replace Whole Document
  // ⚠️ Warning: this replace whole document
  await users.replaceOne(
    { name: 'Rahul Kumar' },
    {
      name: 'Rahul Kumar Dangi',
      age: 21,
      city: 'Pune',
      // All other fields will be deleted.
    }
  );

  // 6. Upsert - Update or Insert
  // if the document is found, update it; otherwise insert it
  await users.updateOne(
    { email: 'new@gmail.com' },
    {
      $set: {
        name: 'New User',
        email: 'new@gmail.com',
        age: 25,
      },
    },
    { upsert: true } // 👈 Magic option!
  );

  return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
