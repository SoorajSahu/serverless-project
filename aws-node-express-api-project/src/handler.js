'use strict';


module.exports.genrateRandomeNumber = async event=>{
const rand = parseInt(Math.random() *100);
console.log('Rand gentated number ' + rand);
return rand;

}