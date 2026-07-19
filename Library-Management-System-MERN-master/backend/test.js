import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://vijayhiragond_db_user:<Vijay@420>@cluster0.vmtrpoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  console.log("✅ Connected successfully!");
  await client.db("admin").command({ ping: 1 });
  console.log("✅ Ping successful!");
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}