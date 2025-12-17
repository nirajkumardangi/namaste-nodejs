use('user_login_data');

db.users.insertMany([
  { name: 'Rahul', skills: ['JavaScript', 'React', 'Node.js'] },
  { name: 'Priya', skills: ['Python', 'Django', 'React'] },
  { name: 'Amit', skills: ['Java', 'Spring', 'MongoDB'] },
]);

// Simple array match
db.users.find({ skills: 'React' });

// $all - All elements should be match
db.users.find({
  skills: { $all: ['JavaScript', 'React'] },
});

// $size - Exact size of the array
db.users.find({ skills: { $size: 3 } });

// $elemMatch - Complex conditions on array elements
db.students.find({
  scores: {
    $elemMatch: {
      subject: 'Math',
      marks: { $gt: 80 },
    },
  },
});

db.users.insertOne({
  name: 'Rahul',
  scores: [
    { subject: 'Math', marks: 85 },
    { subject: 'Science', marks: 90 },
    { subject: 'English', marks: 75 },
  ],
});

// Students with 80+ marks
db.users.find({ 'scores.marks': { $gt: 80 } });

// Specific: Math with 80+ marks
db.users.find({
  scores: {
    $elemMatch: {
      subject: 'Math',
      marks: { $gt: 80 },
    },
  },
});
