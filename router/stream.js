module.exports=function(app){
  
    app.get('/src/streams/stream',(req,res)=> {
        let x= require("../src/streams/stream");
        x.main(req,res);
        
    })
  }