const mongoose  = require('mongoose');  


 

const ProfileSchema = mongoose.Schema({ 

name : {
type: String  , 
required : true 

} , 

age : {
   type :Number ,
   required : true  } ,  

height: {
    type: Number ,
    required : true  
}, 
description  : { 
    type:[String], 
    required:true
} , 
date: {
type:Date , 
default : Date.now

}

}) ;  


module.exports = mongoose.model('Profile' , ProfileSchema) ; 