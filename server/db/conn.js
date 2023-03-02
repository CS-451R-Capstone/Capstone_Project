const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://aa57c:8omNDkXEN1qCeDQt@cluster0.ie1muht.mongodb.net/?retryWrites=true&w=majority";

let _db;

async function connectToServer(){
    const client = new MongoClient(Db);
    try{
        await client.connect();
        _db = await client.db('mydb');

    }catch(e){
        console.error(e)
    }


}
 

module.exports = {
  connectToServer,
  getDb: function () {
    return _db;
  },
};