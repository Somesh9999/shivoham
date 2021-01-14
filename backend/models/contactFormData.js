const mongoose= require('mongoose');

const contactFormSchema= mongoose.Schema({
  name: {type: String, required: true},
  subject: {type: String, required: true},
  message: {type: String, required: true},
  email: {type: String, required: true},
  contact:{type: String, required: true}
});

const contactFormModel= mongoose.model('ContactFormData', contactFormSchema );
module.exports= contactFormModel;
