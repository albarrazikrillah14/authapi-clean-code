const dotenv = require('dotenv');
const path = require('path');

if (process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: path.resolve(process.cwd(), '.test.env'),
  });
} else {
  dotenv.config();
}

const config = {
  app: {
    host: process.env.APPHOST,
    port: process.env.APPPORT,
  },
  database: {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  }
};

module.exports = config;