const express= require('express');
const router = express.Router();
const contactControllers=require('../controllers/contact');

router.post("/addContactFormData",contactControllers.addContactFormData)

router.post("/addContactEnquiryData",contactControllers.addContactEnquiryData);

module.exports=router;
