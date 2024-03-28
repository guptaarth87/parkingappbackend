const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const BookingSchema = new Schema(
  {
    email:{
      type:String,
      required: true
    },
    username:{
      type:String,
      required:true
    },
    phoneNo:{
      type:String,
      required:true
    },
    slots:{
        type:[Number],
        required:true
    },
    place_:{
      type:String,
      required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date_time_: {
        type: Date,
        default: Date.now
    }
  }
)
                   //          collectionname, schema , export name
module.exports = mongoose.model('Bookings', BookingSchema , 'Bookings')