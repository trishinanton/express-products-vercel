import { MongoClient, ObjectId } from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()

export type ProductType = {
  title: string
  _id?: ObjectId
}

// Connection URL
const url = process.env.MONGO_URL;
console.log('url :', url)
if (!url) {
  throw Error('dDon\'t corect URL')
}
const client = new MongoClient(url);

// Database Name
const db = client.db()

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


