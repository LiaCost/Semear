// mongo.js
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "semear_catalog";

let db;

async function connect() {
  if (db) return db;
  const client = new MongoClient(url);
  await client.connect();
  console.log("Conectado ao MongoDB!");
  db = client.db(dbName);
  return db;
}

module.exports = { connect };
