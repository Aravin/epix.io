import Router from 'koa-router';
import { sendEmail } from '../../services/email';

const router = new Router();

router.prefix('/v1');

router.get('/version', async ctx => {
    ctx.body = {
        version: process.env.VERSION
    };
});

router.get('/email', async ctx => {
    await sendEmail(ctx);
});

export { router as v1Router };

