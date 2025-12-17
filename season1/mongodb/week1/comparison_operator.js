require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('user_login_data');
  const users = db.collection('login_data');

  //=====================================================================================
  // 🔷 1. Comparison Operators

  // $eq - Equal
  console.log(await users.find({ age: { $eq: 25 } }).toArray());
  // Same as: await users.find({ age: 25 })

  // $ne - Not Equal
  console.log(await users.find({ age: { $ne: 25 } }).toArray());

  // $gt - Greater Than
  console.log(await users.find({ age: { $gt: 25 } }).toArray());

  // $gte - Greater Than or Equal
  console.log(await users.find({ age: { $gte: 25 } }).toArray());

  // $lt - Less Than
  console.log(await users.find({ age: { $lt: 25 } }).toArray());

  // $lte - Less Than or Equal
  console.log(await users.find({ age: { $lte: 25 } }).toArray());

  //=====================================================================================

  // 🔷 2. Range Queries:

  // Age 20 se 25 ke beech
  console.log(
    await users
      .find({
        age: { $gte: 20, $lte: 25 },
      })
      .toArray()
    );

    // Products price range
    console.log(
      await products
      .find({
        price: { $gte: 1000, $lte: 5000 },
      })
      .toArray()
    );

    // Date range
    console.log(
    await users
      .find({
        createdAt: {
          $gte: new Date('2025-12-15'),
          $lt: new Date('2025-12-17'),
        },
      })
      .toArray()
    );

  //=====================================================================================

  // 🔷 3. $in and $nin Operators:

  // $in - Any of the multiple values
  console.log(
    await users
    .find({
      city: { $in: ['Delhi', 'Mumbai', 'Bangalore'] },
    })
    .toArray()
  );
  // people living in any of these 3 cities

  // $nin - Not In (These values are not needed)
  console.log(
    await users
      .find({
        city: { $nin: ['Delhi', 'Mumbai'] },
      })
      .toArray()
  );

  // Delhi aur Mumbai ke alawa sab

  return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
