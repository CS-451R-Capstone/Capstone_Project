const {MongoClient} = require('mongodb');



async function main(){
   listClasses();
}

async function listClasses()
{
     /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
     const uri = "mongodb+srv://srsf35:123@cluster0.ie1muht.mongodb.net/?retryWrites=true&w=majority";
 

     const client = new MongoClient(uri);
  
     try {
         // Connect to the MongoDB cluster
         await client.connect();
  
         // Make the appropriate DB calls
         const posting = await client.db('mydb').collection('Classes').find({});
         await posting.forEach((result, i) => {
            console.log();
            console.log(`name: ${result.className}`);
            console.log(`sectionID: ${result.sectionID}`);
            console.dir(result.postings['000'].job_title);
        });
     } catch (e) {
         console.error(e);
     } finally {
         await client.close();
     }
}

main().catch(console.error);