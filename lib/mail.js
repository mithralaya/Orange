/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = {
    sendEmail: function(emailObject) {
        var nodemailer = require("nodemailer");

        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "mithralaya@gmail.com",
                pass: "vasudevan1"
            }
        });

        smtpTransport.sendMail({
            from: "OhWomaniya <mithralaya@gmail.com>", // sender address
            to: emailObject.name+' '+emailObject.email, // comma separated list of receivers
            subject: emailObject.subject, // Subject line
            text: emailObject.plainText, // plaintext body
            html: emailObject.htmlBody // HTML Body
        }, function(error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response.message);
            }
        });
    }
};