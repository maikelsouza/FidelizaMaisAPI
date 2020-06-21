'use strict'

const nodemailer = require('nodemailer');

function emailControle(){}

function getTransport() {
  let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "fidelizamais@appfidelizamais.com.br",
      pass: "mkl86233@"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  return transporter;
}

emailControle.prototype.enviarEmail = async (req, res) => {
  let transporter = null;
  try {
    transporter = getTransport();
    await transporter.sendMail({
      from: 'Fideliza Mais <fidelizamais@appfidelizamais.com.br>',            
      to: req.body.to,
      //to: 'maikel.souza@gmail.com',
      //subject: "Assunto do Email",
      subject: req.body.subject,
      //text: 'Esse é o corpo de e-mail.....',
      text: req.body.text + req.body.senha,
      //html: 'transporter.close() antes do send em <strong>html</strong>'
    })
    res.status(200).send({ message: 'Deu certo!' });
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  } finally {
    transporter.close();
  }
};  
  
  

module.exports = emailControle;