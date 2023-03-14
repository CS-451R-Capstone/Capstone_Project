const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
async function connectToServer(){
    try{
        await client.connect();
        let db = client.db('mydb');
        console.log("Sucessfully connected to MongoDB");
        return db;
    }catch(err){
        console.error(err.message)
    }
}
async function closeServer(){
    try{
        await client.close();
        console.log("Closing connection");
    }catch(err){
        console.error(err);
    }
}
 
module.exports = {
  connectToServer,
  closeServer
};