use('products_data');

/*
db.products.insertMany([
  {
    name: 'iPhone 15',
    category: 'Mobile',
    price: 79999,
    stock: 50,
    ratings: [4, 5, 4, 5],
  },
  {
    name: 'Samsung S24',
    category: 'Mobile',
    price: 69999,
    stock: 30,
    ratings: [4, 4, 5],
  },
  {
    name: 'MacBook Pro',
    category: 'Laptop',
    price: 149999,
    stock: 20,
    ratings: [5, 5, 5],
  },
  {
    name: 'Dell XPS',
    category: 'Laptop',
    price: 129999,
    stock: 15,
    ratings: [4, 4, 3],
  },
  {
    name: 'iPad Pro',
    category: 'Tablet',
    price: 89999,
    stock: 25,
    ratings: [5, 4, 5],
  },
  {
    name: 'AirPods Pro',
    category: 'Accessory',
    price: 24999,
    stock: 100,
    ratings: [4, 5],
  },
]);

*/

// Q1: Products with price greater than 50000
db.products.find({ price: { $gt: 50000 } });

// Q2: Products in Mobile or Laptop category
db.products.find({
  $or: [{ category: 'Mobile' }, { category: 'Laptop' }],
});

// Q3: Products with price between 50000 and 100000, and stock greater than 20
db.products.find({
  price: { $gte: 50000, $lte: 100000 },
  stock: { $gt: 20 },
});

// Q4: Products whose name contains "Pro"
db.products.createIndex({ name: 'text' });
db.products.find({ $text: { $search: 'Pro' } });

// Q5: Products whose ratings array contains 5
db.products.find({ ratings: 5 });

// Q6: Update products with stock less than 25 – increase stock by 10
db.products.updateMany({ stock: { $lt: 25 } }, { $inc: { stock: 10 } });

// Q7: Delete products in Accessory category
db.products.deleteMany({ category: 'Accessory' });
