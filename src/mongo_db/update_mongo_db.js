const { MongoClient } = require('mongodb');
function main (req,res){
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'harsh_table_db';

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
         const collection = db.collection('col_1');
        db.collection('col_1').updateOne({
        })
        console.log('harsh') 
        res.send();       
        return 'done.';
      }
      main();
    }
module.exports={
    main
}