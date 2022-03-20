const express= require('express');
const app=new express();

const nav=[
    {
        link:'/books', name:'Books'
    },
    {
        link:'/authors', name:'Authors'
    },
    {
        link:'/admin', name:'Add Book'
    },
    {
       link:'/admins', name:'Add Author'
    },
    {
        link:'/login', name:'Login'
    },
    {
        link:'/signup', name:'Signup'
    }
];
const PORT = process.env.PORT || 5003;
const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorsRouter=require('./src/routes/authorRoutes')(nav)
const loginRouter=require('./src/routes/loginRoutes')(nav)
const signupRouter=require('./src/routes/signupRoutes')(nav)
const adminRouter=require('./src/routes/adminRoutes')(nav)
const adminsRouter=require('./src/routes/adminsRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/admins',adminsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("index",
    {
       nav,
        title:'Library'
    });
});

app.listen(PORT,()=>{
    console.log("Server Ready on 5003"); 
});
