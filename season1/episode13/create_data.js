require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'user_login_data';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('login_data');

  // CREATE Operations

  // 1. insertOne() - 1 Document Insert
  // Example 1:::
  await collection.insertOne({
    name: 'Rahul Kumar',
    age: 25,
    city: 'Delhi',
  });

  // Example 2:::
  await collection.insertOne({
    name: 'Priya Sharma',
    age: 23,
    email: 'priya@gmail.com',
    phone: '9876543210',
    address: {
      street: '123 MG Road',
      city: 'Mumbai',
      pincode: '400001',
    },
    skills: ['JavaScript', 'React', 'Node.js'],
    isActive: true,
    createdAt: new Date(),
  });

  // 2. insertMany() - Multiple Documents Insert
  await collection.insertMany([
    {
      name: 'Amit Singh',
      age: 28,
      city: 'Bangalore',
    },
    {
      name: 'Sneha Patel',
      age: 24,
      city: 'Ahmedabad',
    },
    {
      name: 'Vikram Rao',
      age: 30,
      city: 'Hyderabad',
    },
  ]);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
