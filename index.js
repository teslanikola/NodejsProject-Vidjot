const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

//Connect to mongoose  .then are promises
mongoose.connect('mongodb://localhost:27017/vidjot-dev',{
    useNewUrlParser: true
})
.then(()=> console.log('MongoDB connected...'))
.catch(err=>console.log(err))

//Load idea model
require('./models/Idea')
const Idea = mongoose.model('ideas');

//Handle bar middleware
//Create engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//Setup the view engine
app.set('view engine', 'handlebars');

//INdex and About Routes
app.get('/',(req,res)=>{

    //Renders the node handlebars specifically index.handlebars
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});

const port = 5000;

app.listen(port,()=> {
    //Back ticks are template literals used for including the variables in the string without specific string concatenation
    console.log(`Server started on port ${port}`);
});