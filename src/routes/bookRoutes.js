const express= require('express');
const booksRouter=express.Router();
const Bookdata= require('../model/Bookdata');
function router(nav){
    /*var books = [{

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
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
               nav,
                title:'Library',
                books
            });
        })   
    });
    booksRouter.get('/:id',function(req,res){
      const id =  req.params.id
      Bookdata.findOne({_id:id})
      .then(function(book){
        res.render("book",{
            nav,
             title:'Library',
             book
         });

      })
       
     });
 return booksRouter;
}

module.exports=router;