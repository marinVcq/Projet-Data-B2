import mysql from 'mysql2/promise';

import dotenv from 'dotenv';
dotenv.config();

// Create a connection pool
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
});

// Handle database connection errors
db.on('error', (err) => {
  console.error('Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed. Reconnecting...');
    db.end();
    db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  } else {
    throw err;
  }
});

// Test the connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log('Connected to database');
    connection.release();
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
})();
