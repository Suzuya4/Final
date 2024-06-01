// // utils/db.ts
// import mysql from 'mysql2/promise';

// export const connectToDatabase = async () => {
//   const connection = await mysql.createConnection({
//     host: process.env.localhost,
//     user: process.env.root,
//     password: process.env.renz,
//     database: process.env.webfin,
//   });
//   return connection;
// };




// utils/db.ts
import mysql from 'mysql2/promise'; // Import MySQL client library

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'aa',
};

export const connectToDatabase = async () => {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
};
