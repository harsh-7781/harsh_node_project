function main(req,res){
    const fs = require('node:fs');
    console.log("Hello");

    let rs = fs.createReadStream('/dummy.txt')
    rs.on('data',function(chunk){
        console.log('chunk')
    });

    rs.on('end', function() {
        console.log('end');
      }); 
}

module.exports={
    main:main
}