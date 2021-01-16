const mongoose= require('mongoose');

const contactEnquirySchema= mongoose.Schema({
  product:{type: String, required: true},
  email: {type: String, required: true},
  contact:{type: String, required: false},
  description:{type: String, required: false}
});

const contactEnquiryModel= mongoose.model('ContactEnquiryData', contactEnquirySchema );
module.exports= contactEnquiryModel;
