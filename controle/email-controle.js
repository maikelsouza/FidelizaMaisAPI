'use strict'

const nodemailer = require('nodemailer');

function emailControle(){}

function getTransport() {
  let transporter = nodemailer.createTransport({
    host: "",
    port: "",
    secure: false,
    auth: {
      user: "",
      pass: ""
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
      from: '',                  
      to: '',
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html
    })
    res.status(200).send({ message: 'Deu certo!' });
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  } finally {
    transporter.close();
  }
};  
  
  

module.exports = emailControle;