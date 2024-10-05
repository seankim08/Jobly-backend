"use strict";
/** Database setup for jobly. */
const { Pool } = require("pg");
const { getDatabaseUri, DB_SSL_CONFIG } = require("./config");

const db = new Pool({
  connectionString: getDatabaseUri(),
  ssl: DB_SSL_CONFIG,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
});

db.connect();

module.exports = db;