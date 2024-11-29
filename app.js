
function totalObj (){

const namesFunction = require("./names");
const hobbiesFunction = require("./hobbies")




return{
    
    fullName : namesFunction.names("gino" , "pino"),
    hobbies : hobbiesFunction.hobbies("volo" , "nuoto" , "palla")
}

}

const result = totalObj();

console.log(result);
