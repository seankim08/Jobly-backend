"use strict";
/** Database setup for jobly. */
const { Pool } = require("pg");
const { getDatabaseUri, DB_SSL_CONFIG } = require("./config");

const db = new Pool({
  connectionString: getDatabaseUri(),
  ssl: DB_SSL_CONFIG,
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  max: 5 // maximum number of clients in the pool
});

db.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = db;