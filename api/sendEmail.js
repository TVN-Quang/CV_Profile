const nodemailer = require("nodemailer");
module.exports = (req, res) => {
    try {
      await sendEmail(req, res); 
      res.json({
        message: 'success'
      })
    } catch (error) {
      console.log(error);
      res.json({
        error: error
      })
    }
    
}

async function sendEmail(req, res) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: req.email, // list of receivers
    subject: req.subject, // Subject line
    text: req.message, // plain text body
    html: `<h4>Name: ${req.fullname} </h4>`, // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

