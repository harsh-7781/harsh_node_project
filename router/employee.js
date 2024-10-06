

module.exports=function(app){
    app.get("/get_employee",function(req,res){
        let x = require("../src/emp/get_employee");
        x.main(req,res);
    })
}