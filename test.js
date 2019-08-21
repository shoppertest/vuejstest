var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'abv.bg',
    auth: {
        user: 'str100@abv.bg',
        pass: 'str100'
    }
});

var mailOptions = {
    from: 'str100@abv.bg',
    to: 'dinkovd@outlook.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});