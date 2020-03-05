# nodejs-sendmail
A NodeJS mailer program

# How to use
Ensure you have node and npm installed.

    $ npm install
    $ <edit nodejs-sendmail.js to add your credentials and 'from' line>
    $ node nodejs-sendmail.js
    $ [OR] npm run-script run
    
This gives a simple example of sending an HTML email.  A real production program to send mail to a mailing
list could easily be written to accept the HTML to send and a list of recipients, either from a file or
a database.

A mailer service such as mailgun (there are others) are recommended for sending out HTML mail for mailing
lists, although you can certainly log in to your gmail account and send from there.  Note, you must enable
allow insecure app access before you can send mail through gmail (like in this program).
