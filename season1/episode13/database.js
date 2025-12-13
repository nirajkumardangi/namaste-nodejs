require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // New Data
  const data = {
    firstname: 'Rahul',
    lastname: 'Singh',
    age: 28,
    city: 'Agra',
    phoneNumber: '6575847778',
  };

  // Insert a Document
  const insertResult = await collection.insertMany([data, data]);
  console.log('Inserted documents =>', insertResult);

  // Find All Documents
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  // Find All Documents with firstname is "Rahul"
  const filteredDocs = await collection.find({ firstname: 'Rahul' }).toArray();
  console.log(
    'Found documents filtered by { username: Rahul } =>',
    filteredDocs
  );

  // Remove a Documents
  const deleteResult = await collection.deleteMany({ firstname: 'Rahul' });
  console.log('Deleted documents =>', deleteResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
