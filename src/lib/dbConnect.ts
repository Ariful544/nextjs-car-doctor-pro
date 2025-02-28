import {Collection, MongoClient,ServerApiVersion} from "mongodb";

interface DbConnectParams{
  collectionName: string
}

export default function dbConnect({collectionName}:DbConnectParams):Collection{
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;
  if(!uri || !dbName){
    throw new Error("Missing MONGODB_URI or DB_NAME in environment variables")
  }
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(dbName).collection(collectionName);
}