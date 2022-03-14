const express= require('express');
const authorsRouter=express.Router();
const Authordata = require('../model/Authordata');

function router(nav){

   /* var authors = [{

        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        genre: 'Detective and Mystery',
        img: "adventure.jfif"
    },
    {
        title: 'The call of wild',
        author: 'Jack London',
        genre: 'Action & Adventure',
        img: "call.jfif"
    },
    {
        title: 'Heart of darkness',
        author: 'Joseph Conrad',
        genre: 'Novel',
        img: "heart.jfif"
    },
    ]
    */
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
               nav,
                title:'Library',
                authors
            });
        })
       
    });
    authorsRouter.get('/:id',function(req,res){
      const id =  req.params.id
      Authordata.findOne({_id:id})
      .then(function(author){
        res.render("author",{
            nav,
             title:'Library',
             author
         });

      })
       
     });
     return authorsRouter
}
module.exports=router;