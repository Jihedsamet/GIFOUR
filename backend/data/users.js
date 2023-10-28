import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Maher achouri',
    email: 'maher@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'khalil ayari',
    email: 'khalil@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jihed samer',
    email: 'sametjihed6@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
