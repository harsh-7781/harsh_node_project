const { v4: uuidv4 } = require('uuid');
uuidv4();

function main(req,res){
    let x = uuidv4();
        console.log('x',x);
    
}
module.exports={
    main
}