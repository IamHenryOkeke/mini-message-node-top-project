const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://henryokeke27:0dFeJCrp9kaE@ep-lucky-meadow-a5ifg5q8-pooler.us-east-2.aws.neon.tech/mini-message-board?sslmode=require"
});

module.exports = { pool }