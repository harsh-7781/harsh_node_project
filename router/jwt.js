module.exports=function(app){
  
    app.get('/src/jwt/authentication',(req,res)=> {
        let x= require("../src/jwt/authentication");
        x.main(req,res);
        
    })
    app.get('/src/jwt/create_jwt_token',(req,res)=> {
        let x= require("../src/jwt/create_jwt_token");
        x.main(req,res);
        
    })
    app.get('/src/jwt/verify_jwt_token',(req,res)=> {
        let x= require("../src/jwt/verify_jwt_token");
        x.main(req,res);
        
    })
  }