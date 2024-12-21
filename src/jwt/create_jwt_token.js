var jwt = require('jsonwebtoken');

function main(req,res){
    const name = "rupesh"
    var token = jwt.sign(name, 'shhhhh');

      res.send(token);
      console.log(token);
}

module.exports={
    main
}