import nodemailer from 'nodemailer';
import koa from 'koa';

export async function sendEmail(ctx: koa.Context)
{
    let response = 'Failure';

    try
    {
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

        const body = ctx.request.body;

        // send some mail
        response = await new Promise((resolve, reject) => {
            transporter.sendMail({
                to: body.to,
                cc: body.cc,
                bcc: body.bcc,
                from: body.from, // Use the email address or domain you verified above
                replyTo: body.replyTo,
                subject: body.subject,
                text: body.text,
                html: body.html,
            }, async (err, info) => {
                if (err) {
                    reject(err.message);
                }
                if (info) {
                    resolve(info.response);
                }
            });
        });

        return await ctx.ok(response);
    }
    catch (err)
    {
        return ctx.internalServerError(err);
    }
}
