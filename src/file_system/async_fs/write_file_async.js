const fs= require("fs");
const main=(req,res)=>{
    const file_name = req.query.file_name;
    const data = req.body;
    console.log("data", data);
    fs.writeFile(file_name,JSON.stringify(data),(error,data)=>{
        if(error){
            res.send("Something went wrong");
        }
        else{
            console.log("File Writed");
            res.send("File Writed");
        }
    })
    module.exports={
        main:main
    }
}
