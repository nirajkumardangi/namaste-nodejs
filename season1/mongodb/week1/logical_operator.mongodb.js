use('user_login_data');

db.users.find({
  $and: [{ age: { $gte: 25 } }, { city: 'Delhi' }],
});

db.users.find({
  $or: [{ age: { $lt: 25 } }, { age: { $gt: 30 } }],
});

//==> (age > 25 AND city = "Delhi") OR (isAdmin = true)
db.users.find({
  $or: [{ $and: [{ age: { $gt: 25 } }, { city: 'Delhi' }] }, { isAdmin: true }],
});

db.users.find({ phone: { $exists: false } });
