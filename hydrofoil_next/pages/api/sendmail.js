import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

try{
  await mail.send({
      to: `${process.env.email}`,
      from: `${process.env.email}`,    
      subject: `${req.body.subject}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${req.body.fullname} </p><br>
      <p><strong>Email: </strong> ${req.body.email} </p><br>
      <p><strong>Message: </strong> ${req.body.message} </p><br>

      `,
  });
} catch (error) {
     console.log(error);
     return res.status(error.statusCode || 500).json({ error: error.message });
}
  res.status(200).json({ status: 'Ok' });


};