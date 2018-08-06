const mongoose = require('mongoose');

//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const Schema =mongoose.Schema;      //Even though mongo is schemaless, mongoose provides some level of schema

//Create schema
const IdeaSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('ideas',IdeaSchema);