import { Mailer } from 'nodemailer-react'
require('dotenv').config()
const { MAIL_USER, MAIL_PASSWORD} = process.env

const transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD, 
  },
}


const sendContacto = (mail, asunto, comentario) => ({
      from: mail,
      to: MAIL_USER, 
      subject: `${asunto} (WEB CONTACT)`, // Subject line
      html: `
            <h1>Nuevo contacto desde la web</h1>
            <h3>Comentario:</h3> <p>${comentario}</p>`
})

const mailer = Mailer(
  { transport },
  { sendContacto }
)

export default mailer