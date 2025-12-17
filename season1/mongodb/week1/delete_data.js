require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('user_login_data');
  const users = db.collection('login_data');
  /*
  // DELETE Operations
  // 1. deleteOne() - 1 Document Delete

  // Example: Delete one user
  await users.deleteOne({ name: 'Rahul Kumar Dangi' });

  // delete using _id
  // await users.deleteOne({ _id: ObjectId('65a1b2c3d4e5f6a7b8c9d0e1') });

  //================================================================================
  // 2. deleteMany() - Multiple Documents Delete

  // Example 1: Delete all Delhi users
  await users.deleteMany({ city: 'Delhi' });

  // Example 2: Delete all inactive users
  await users.deleteMany({ isActive: false });

  // Example 3: Delete below the age 18
  await users.deleteMany({ age: { $lt: 18 } });

  // ⚠️ DANGER: ALl documents delete!
  await users.deleteMany({});

  //================================================================================
  */

  // 3. findOneAndDelete() - Delete & Return
  // return deleted document
  const deletedUser = await users.findOneAndDelete({ name: 'Amit Singh' });
  console.log(deletedUser);

  //================================================================================

  //  4. Drop Collection - ALl Collection Delete
  // ⚠️ EXTREME DANGER: all collection delete!
  await users.drop();

  // Database drop
  await dropDatabase();

  return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
