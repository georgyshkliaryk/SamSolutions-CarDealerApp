const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Ad model & Schema
const AdSchema = newSchema({
   carName: {
       type: String,
       required: [true, 'Name of the car is required']
   },
   carImage: {
       type: String
   }, 
   carModel: {
       type: String,
       required: [true, 'Model of the car is required']
   },
   carPrice: {
        type: Number,
        required: [true, 'Price of the car field is required']
   },
   carDescription: {
       type: String
   },
   carYear: {
       type: Number
   },
   carMileage: {
       type: Number
   },
   carType: {
       type: String
   },
   carUsed: {
       type: Boolean,
       default: false
   }
});

const Ad = mongoose.model('ad', AdSchema);

module.exports = Ad;