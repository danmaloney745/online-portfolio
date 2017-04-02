const Contact = require("../models/contact");
const mailer = require("../lib/email");

class ContactController {
    static sendContactRequest(req, res) {
       try {
           //console.log(req.body);
           const contactRequest = new Contact(req.body);
           mailer.sendEmail(contactRequest)
                    .then (() => {
                        console.log("It sent the email");
                        res.redirect("/");
                    })
                    .catch(error => {
                        console.log("It failed because "+ error);
                        res.redirect("/");
                    });
       } catch (err) {
           //the error message
           console.log(err);
           res.redirect("/");
       }
    }
}


module.exports = ContactController;