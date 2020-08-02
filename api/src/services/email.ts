import nodemailer from 'nodemailer';

export async function sendEmail(req: any, res: any) {
    let response = 'Failure';

    try {
        // create Nodemailer SES transporter
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SMTP_SERVER,
            port: parseInt(process.env.EMAIL_SMTP_PORT as string, 10),
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: process.env.EMAIL_SMTP_USERNAME,
                pass: process.env.EMAIL_SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        const body = req.body;

        // send some mail
        response = await new Promise((resolve, reject) => {
            transporter.sendMail({
                to: req.body.to,
                cc: req.body.cc,
                bcc: req.body.bcc,
                from: req.body.from, // Use the email address or domain you verified above
                replyTo: req.body.replyTo,
                subject: req.body.subject,
                text: req.body.text,
                html: req.body.html,
            }, (err, info) => {
                if (err) {
                    reject(err.message);
                }
                if (info) {
                    resolve(info.response);
                }
            });
        });

        return res.status(200).send(response);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}
