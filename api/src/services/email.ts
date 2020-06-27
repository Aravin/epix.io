import { MailService, MailDataRequired } from '@sendgrid/mail';
import koa from 'koa';

export async function sendEmail(ctx: koa.Context) {
    
    const mailService = new MailService();

    mailService.setApiKey(process.env.SENDGRID_API_KEY as string);

    const body = ctx.request.body;

    const msg: MailDataRequired = {
        to: body.to,
        cc: body.cc,
        bcc: body.bcc,
        from: body.from, // Use the email address or domain you verified above
        replyTo: body.replyTo,
        subject: body.subject,
        text: body.text,
        html: body.html,
    };

    //ES6
    const status = mailService
        .send(msg)
        .then(success => { return true },
            error => {  return false 
        })
        .catch(err => {return false});

    if (status) {
        ctx.status = 200;
        ctx.body = 'OK'
    } else {
        ctx.status = 400,
        ctx.body = 'Failed'
    }
}
