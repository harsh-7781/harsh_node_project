function main(req,res){
    const fs = require("fs");
    
    console.log("Harsh")
    const rs = fs.createReadStream(__dirname+"/../dummy100.txt");

    rs.pipe(ws);

}
    module.exports={
        main
    }