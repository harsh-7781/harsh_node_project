module.exports=function(app){

  console.log("Directory Name",__dirname);
    console.log("Directory Name",__filename);

 app.post("/api/v1/file_system/async_fs/write_file_async",(req,res)=>{
        // const wite_file_instance = require("../src/file_system/async_fs/write_fille_async");
        const write_file_instance = require(__dirname+"/../src/file_system/async_fs/write_file_async");
        write_file_instance.main(req,res);
    })


  app.get("/api/v1/file_system/async_fs/read_file_async", (req,res)=>{
    const read_file_instance = require(__dirname+"/../src/file_system/async_fs/read_file_async");
    read_file_instance.main(req,res);
  })

    app.post('/file_system/async_fs/append_file_async',(req,res)=>{
      let x= require("../src/file_system/async_fs/append_file_async");
      console.log("X",x)
      x.main(req,res);
      })
}