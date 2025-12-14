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

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
