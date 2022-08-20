import nodemailer from 'nodemailer';


export default async (req, res) => {
  require('dotenv').config()

  console.log(req.body)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  try {
     const emailRes = await transporter.sendMail({
       from: `${req.body.email}`,
       to: process.env.email,
       subject: `Contact form submission from ${req.body.subject}`,
       html: `<p>You have a new contact form submission</p><br>
       <p><strong>Name: </strong> ${req.body.fullname} </p><br>
       <p><strong>Message: </strong> ${req.body.message} </p><br>

       `,
     });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};