const  bodyParser = require('body-parser');
const express = require('express') ; 

const router =    express.Router() ;
//importschema  
 const  profile = require('../Data/Schema');
 router.get('/' , (req , res) => {


    res.send ('we are in posts test  ') ;  
    
     });  
router.get('/Register' , (req , res) => {
res.send ('we are in register page ') ;  

 });  

 router.get('/login' , (req,res)  => {
    res.send ('we aree in loginpage  ') ;  

 })/
router.post('/' , async (req,res)=> { 
//  console.log(req.body) ; 

const Profile = new profile ({ 
name: req.body.name , 
age : req.body.age, 
height : req.body.height , 
description:req.body.description
}) ;  
try {
    const data = await  Profile.save() ; 
    res.status(201).json({data}) ; 
} catch (err) {
    res.status(400).json({message: err.message}) ; 
    
}          
// // save  
// .then(data => {
//   res.status(201).json(data) ;  //success 

// })
// .catch(err=> { 
  
    // res.status(400).json({message: err.message}) ; 
// })  ; 
});


 module.exports = router  ; 