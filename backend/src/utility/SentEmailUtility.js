var nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'mail.kitchenground.com',
        port: 465,
        secure: true,
        auth: {
            user: "shakil@kitchenground.com",
            pass: 'shakil52814542A'
        },tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'Inventory <shakil@kitchenground.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    
   return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility