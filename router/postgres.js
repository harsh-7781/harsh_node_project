module.exports = function(app) {
    // Define the POST route for /harshdb/create
    app.post("/harshdb/create", (req, res) => {
        // Import the database insert logic
        const createdb = require("../src/pg_sqldb/insert");

        // Call the main function to handle the request
        createdb.main(req, res);
    });


    app.post('/api/postgre/create',(req,res)=> {
        let x= require("../src/pg_db/create_pgdb");
        console.log("X",x)
        x.main(req,res);
        
    })

    app.get('/api/postgre/read',(req,res)=> {
        let x= require("../src/pg_db/read_pgdb");
        console.log("X",x)
        x.main(req,res);
        
    })
    app.get('/api/postgre/delete',(req,res)=> {
        let x= require("../src/pg_db/delete_pgdb");
        console.log("X",x)
        x.main(req,res);
        
    })

    app.get('/api/postgre/update',(req,res)=> {
        let x= require("../src/pg_db/update_pgdb");
        console.log("X",x)
        x.main(req,res);
        
    })
};
