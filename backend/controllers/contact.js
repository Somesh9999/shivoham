const ContactFormData= require('../models/contactFormData');
const ContactEnquiryData= require('../models/contactEnquiryData');
const mailController= require('../controllers/sendMail')

exports.addContactFormData=(req,res,next)=>{
  const contactFormData= new ContactFormData({
    name:req.body.name,
    subject:req.body.subject,
    message:req.body.message,
    email:req.body.email,
    contact:req.body.contact
  });
  contactFormData.save().then(message=>{
    mailController.sendMailToEnt(contactFormData,info=>{
      console.log("Mail Sent To Enterprise");
    });
    res.status(201).json({message:message})
  });
}

exports.addContactEnquiryData=(req,res,next)=>{
  const contactEnquiryData= new ContactEnquiryData({
    product:req.body.product,
    email:req.body.email,
    contact:req.body.contact,
    description:req.body.description
  });
  contactEnquiryData.save().then(message=>{
    mailController.sendEnquiryMailToEnt(contactEnquiryData,info=>{
      console.log("Mail Sent To Enterprise");
    });
    res.status(201).json({message:message})
  });
}
