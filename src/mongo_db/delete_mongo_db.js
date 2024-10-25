const { MongoClient } = require('mongodb');
const { getmongodbConnection } = require('../base/mongo_connector');

// const fs = require('fs');
function main (req,res){
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'harsh_table_db';

    async function main() {
        const db = await getmongodbConnection();
        const rec = await  db.collection('col_1').find(req.body).toArray();
        console.log(rec) 
        res.send(rec); 
    }
      main();
    }
module.exports={
    main
}