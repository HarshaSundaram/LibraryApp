//Accessing mongoose package
const mongoose= require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.vqeql.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;

const AuthorSchema= new Schema({
    title: String,
    author: String,
    genre:String,
    image: String
});

//Model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;