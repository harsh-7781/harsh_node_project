var jwt = require('jsonwebtoken');

function main(req,res){
    var uuid='eyJhbGciOiJIUzI1NiJ9.cnVwZXNo.3d2WWfGbTOdSv4SpNY5GgU3l44hi2UkCuSvlJNWA4Bc'
    var decoded = jwt.verify(uuid, 'shhhhh');

    console.log(decoded);
    res.send(decoded);
  
}

module.exports={
    main
}