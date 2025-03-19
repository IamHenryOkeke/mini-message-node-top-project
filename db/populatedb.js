#! /usr/bin/env node

const { Client } = require("pg");
const fs = require("fs");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  "user" VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "user", added) VALUES ('Hi there', 'Amando', NOW());
INSERT INTO messages (text, "user", added) VALUES ('Hello World', 'Charles', NOW()); 
`;

async function main() {
  console.log("seeding...");


  const caPath = "./ca.pem";

  if (!fs.existsSync(caPath)) {
    console.error("Error: SSL certificate (ca.pem) not found!");
    process.exit(1);
  }
  
  const client = new Client({
    connectionString: process.env.DBURL
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
