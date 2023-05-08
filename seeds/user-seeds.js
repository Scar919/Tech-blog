const sequelize = require('./config/connection');
const { User, Post } = require('./models');

const userdata = [
 {
    username: 'alesmode0',
    email: 'gmidgley4@weather.com',
    password: 'password123'
 },
  {
    username: 'inode1',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'domjue2',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'wkors3',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'pfiel4',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'jvonne5',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jwilliams6',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;