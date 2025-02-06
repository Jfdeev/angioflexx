const nodemailer = require('nodemailer');

const transponder = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jfrsoares161205@gmail.com',
        pass: '@Joao161205'
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'jfrsoares161205@gmail.com',
        to: to,
        subject: subject,
        text: text
    }

    transponder.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
};

module.exports = sendEmail;