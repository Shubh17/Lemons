const functions = require('firebase-functions');

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// this function will send customer email addresses to lemonadeCo
exports.sendMeCustomerEmail = functions.https.onRequest((request, response) => {
    var email = request.query.emailID
    response.send("Hello from Firebase!" + email);

    // var transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: 'lemonadeco19@gmail.com',
    //         clientID:'804734313404-lapd324jjro53k4pf1jqa2iuksdl40cn.apps.googleusercontent.com',
    //         clientSecret:'_IL-0FqczVOoWkqoYfAB6GO8',
    //         refreshToken:'1/FfMSzYlm_jGLLdv6HiP6p8yxpWhyxXforZ42fY4kvk4yYy_2HfxOwLPO4zHrnDEn',
    //         accessToken:"ya29.GltnB76uGLd6bKXMTDF2ltrpVr-F75kWD1xtjHPVP5mDcT5hhNc-4zMauyPkC0gEm0QD0TWkBK7g0knxSfETS6XOT189R9ZRB57a8R8LLiNn-ZOfWsXvcqqJcRw8"
    //     }
    // });

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lemonadeco19@gmail.com',
            pass: "hello18923432!",
        }
    });

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log('Message sent: ' + emailID);
    // });

    transporter.sendMail({
        from: "lemonadeco19@gmail.com",
        to: "lemonadeco19@gmail.com",
        // pass: "hello18923432!",
        subject: "subtest", //subject of email
        html: "Send this consumer an informational packet " + email //the body of the email
    }).then(function () {
        response.status(200).send("An email was sent to Promeed from: " + email);
    }).catch(function (error) {
        console.log(error);
        response.status(500).send("Having an issue sending the message from " + email);
    });
    //  nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     auth: {
    //         type: "login", // default
    //         user: "lemonadeco19@gmail.com",
            // pass: "hello18923432!"
    //     }
    // });
});
