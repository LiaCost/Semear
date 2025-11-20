// mongoConnection.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db('semear');
    console.log('MongoDB conectado com sucesso!');
  } catch (err) {
    console.error(' Erro ao conectar MongoDB:', err.message);
    process.exit(1);
  }
}

function getDb() {
  if (!db) throw new Error('MongoDB ainda não conectado!');
  return db;
}

module.exports = { connect, getDb };
