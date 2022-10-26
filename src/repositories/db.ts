import { MongoClient, ObjectId } from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()

export type ProductType = {
  title: string
  _id?: ObjectId
}

// Connection URL
const url = process.env.MONGO_URL || '';
console.log('process.env.MONGO_URL :', process.env.MONGO_URL)
console.log('url :', url)
const client = new MongoClient(url);

// Database Name
const dbName = 'express-vercel-db';
const db = client.db(dbName)

export const productCollection = db.collection<ProductType>('products');

export const runDb = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to server');
  } catch (e) {
    console.log('Don\'t connected successfully to server');
    await client.close()
  }
};


