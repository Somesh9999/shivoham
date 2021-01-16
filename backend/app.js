const express= require('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const ContactFormData= require('./models/contactFormData');
const ContactEnquiryData= require('./models/contactEnquiryData');
const productRoutes=require('./routes/product');
const nodemailer= require('nodemailer');
const path=require('path');
const app= express();

mongoose.connect("mongodb+srv://somesh:"+process.env.MONGO_ATLAS_PW+"@cluster0.immmq.mongodb.net/shivoham?retryWrites=true&w=majority").then(()=>{
  console.log("Connected Successfully");
}).catch(()=>{
  console.log("Connection Failed");
});

/*async function sendMailToUser(userEmail,callback){
  let transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure: false,
    auth:{
      user:process.env.ORG_EMAIL,
      pass:process.env.ORG_PASS
    }
  });

  let mailOptions={
    from:"shivohament5@gmail.com",
    to:userEmail,
    subject:"Welcome to Shivoham Enterprises",
    html:`<h3>Thank You for Contacting Us</h3>`
  };

  let info= await transporter.sendMail(mailOptions);

  callback(info);
}*/

async function sendMailToEnt(contactFormData,callback){

  let transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure: false,
    auth:{
      user:process.env.ORG_EMAIL,
      pass:process.env.ORG_PASS
    }
  });

  let mailOptions={
    from:"shivohament5@gmail.com",
    to:"shivohament5@gmail.com",
    subject:`New Contact Message:${contactFormData.subject}`,
    html:`<h3>Details</h3><br>
          <table>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
            <tr>
            <td>${contactFormData.name}</td>
            <td>${contactFormData.subject}</td>
            <td>${contactFormData.message}</td>
            <td>${contactFormData.email}</td>
            <td>${contactFormData.contact}</td>
          </tr>
          </table>`
  };

  let info= await transporter.sendMail(mailOptions);

  callback(info);
}

async function sendEnquiryMailToEnt(contactEnquiryData,callback){

  let transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure: false,
    auth:{
      user:process.env.ORG_EMAIL,
      pass:process.env.ORG_PASS
    }
  });

  let mailOptions={
    from:"shivohament5@gmail.com",
    to:"shivohament5@gmail.com",
    subject:`New Enquiry Message:${contactEnquiryData.product}`,
    html:`<h3>Details</h3><br>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
            <tr>
            <td>${contactEnquiryData.product}</td>
            <td>${contactEnquiryData.email}</td>
            <td>${contactEnquiryData.contact}</td>
          </tr>
          </table>`
  };

  let info= await transporter.sendMail(mailOptions);

  callback(info);
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With , Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/images",express.static(path.join("backend/images"))); //Used to provide access to images folder of our backend folder

app.use("/start",(req,res,next)=>{
  res.status(200).json({message:"Sever Started"});
});

app.post("/api/contact/addContactFormData",(req,res,next)=>{
  const contactFormData= new ContactFormData({
    name:req.body.name,
    subject:req.body.subject,
    message:req.body.message,
    email:req.body.email,
    contact:req.body.contact
  });
  contactFormData.save().then(message=>{
    sendMailToEnt(contactFormData,info=>{
      console.log("Mail Sent To Enterprise");
    });
    res.status(201).json({message:message})
  });
})

app.post("/api/contact/addContactEnquiryData",(req,res,next)=>{
  const contactEnquiryData= new ContactEnquiryData({
    product:req.body.product,
    email:req.body.email,
    contact:req.body.contact,
    description:req.body.description
  });
  contactEnquiryData.save().then(message=>{
    sendEnquiryMailToEnt(contactEnquiryData,info=>{
      console.log("Mail Sent To Enterprise");
    });
    res.status(201).json({message:message})
  });
});



//app.use('/api/contact',postRoutes);
app.use('/api/product',productRoutes);

module.exports=app;
