import nodemailer from "nodemailer";
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "petpartyhelp@gmail.com",
    pass: "Pet.2020",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      layoutDir: path.resolve("./src/resources/mail/"),
      partialsDir: path.resolve("./src/resources/mail/"),
    },
    viewPath: path.resolve("./src/resources/mail/"),

    extName: ".html",
  })
);

export default transporter;
