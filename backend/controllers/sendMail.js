const nodemailer= require('nodemailer');

exports.sendMailToEnt=async function sendMailToEnt(contactFormData,callback){

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
    from:"shivohameps@gmail.com",
    to:"shivohameps@gmail.com",
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

exports.sendEnquiryMailToEnt=async function sendEnquiryMailToEnt(contactEnquiryData,callback){

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
    from:"shivohameps@gmail.com",
    to:"shivohameps@gmail.com",
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

