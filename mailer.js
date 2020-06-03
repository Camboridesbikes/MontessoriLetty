const nodemailer = require("nodemailer");


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hattendorfcameron@gmail.com',
            pass: 'Surfrider16'
        }
    });

    const mailOptions = {
        from: 'hattendorfcameron@gmail.com',
        to: 'hattendorfcameron@gmail.com',
        subject: 'NodeTest',
        text: 'test'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
        } else {
            console.log('email sent: ' + info.response);
        }
    });
