import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    host: 'smtp-mail.outlook.com',
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
       user: process.env.REACT_APP_USER,
       pass: process.env.REACT_APP_PASS,
    },

    tls: {
        ciphers:'SSLv3'
    }
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'rafika.ali2022@outlook.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
    });
    console.log('User'+process.env.REACT_APP_USER);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};