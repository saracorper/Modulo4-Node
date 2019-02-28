'use strict';

const mysql2 = require('mysql2');

async function connect() {
  const options = {
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    timezone: 'Z',
    multipleStatements: true,
  };

  const pool = mysql2.createPool(options);
  this.pool = pool.promise();

  try {
    const connection = await this.pool.getConnection();
    if (connection) {
      connection.release();
    }
  } catch (e) {
    console.error('mysql2 pool connect', e);
    throw e;
  }
}

async function getConnection() {
  if (this.pool === null) {
    throw new Error("MySQL connection didn't established. You must connect first.");
  }

  const connection = await this.pool.getConnection();

  return connection;
}

module.exports = {
  connect,
  getConnection,
};



