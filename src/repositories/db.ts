import { MongoClient, ObjectId } from 'mongodb'

export type ProductType = {
  title: string
  _id?: ObjectId
}

// Connection URL
const url = 'mongodb+srv://admin:admin@cluster0.2wclziu.mongodb.net/shop-dev?retryWrites=true&w=majority';
console.log('url :', url)
const client = new MongoClient(url);

export const productCollection = client.db().collection<ProductType>('products');

export const runDb = async () => {
  try {
    await client.connect();
    console.log('✅ Connected successfully to server');
  } catch (e) {
    console.log('❗ Don\'t connected successfully to server');
    await client.close()
  }
};


