require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('user_login_data');
  const user = db.collection('login_data');

  // READ Operations (Find Data)

  // 1. find() - Find All Documents
  console.log(await user.find().toArray());

  // 2. findOne() - Find 1 Document
  console.log(await user.findOne({ name: 'Rahul Kumar' }));

  // 3. Find with Conditions
  // all users from Delhi
  console.log(await user.find({ city: 'Delhi' }).toArray());

  // all users with age = 28 and city = Bangalore
  console.log(
    await user
      .find({
        age: 28,
        city: 'Bangalore',
      })
      .toArray()
  );

  // 4. Projection - Select Specific Fields
  // Find only age and name
  console.log(
    await user.find({}, { projection: { name: 1, age: 1, _id: 0 } }).toArray()
  );

  // 5. Useful Methods
  // Count Documents
  console.log(await user.countDocuments());
  console.log(await user.countDocuments({ age: 25 }));

  // Limit results
  console.log(await user.find().limit(2).toArray());

  // Skip documents (for pagination)
  console.log(await user.find().skip(2).toArray());

  // Pagination example:
  // Page 1: first 2 users
  console.log(await user.find().limit(2).skip(0).toArray());

  // Page 2: next 2 users
  console.log(await user.find().limit(2).skip(2).toArray());

  // Page 3: next 2 users
  console.log(await user.find().limit(2).skip(4).toArray());

  // Sort results
  console.log(await user.find().sort({ age: 1 }).toArray()); // Ascending
  console.log(await user.find().sort({ age: -1 }).toArray()); // Descending
  console.log(await user.find().sort({ name: 1 }).toArray()); // Alphabetically A-Z

  // 6. Complete Example:
  // Delhi ke users, sirf name aur age,
  // age se sort, first 5 only

  const result = await user
    .find(
      { city: 'Delhi' }, // Filter
      { projection: { name: 1, age: 1, _id: 0 } } // Projection
    )
    .sort({ age: 1 }) // Sort by age
    .limit(5)
    .toArray();

  console.log('Multiple JOINS Result: ', result);

  return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
