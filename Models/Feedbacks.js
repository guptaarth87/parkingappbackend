const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const FeedbackSchema = new Schema(
  {
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required: true
    },
    message:{
        type:String,
        required: true
      }
   
  }
)
                   //          collectionname, schema , export name
module.exports = mongoose.model('Feedbacks', FeedbackSchema , 'Feedbacks')