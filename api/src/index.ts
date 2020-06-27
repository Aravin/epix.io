import crypto from 'crypto';

import * as functions from 'firebase-functions';

import koa from 'koa';
import Router from 'koa-router';
import bodyparser from 'koa-bodyparser';
import dotenv from 'dotenv';
import cors from '@koa/cors';
import moment from 'moment';

import { v1Router } from './api/v1/api';

dotenv.config();

const app = new koa();
const router = new Router();

app
    .use(cors())
    .use(async (ctx, next) => {

        if (ctx.header && ctx.header['x-api-key'] && ctx.header['x-api-request-time']) {
            const requestKey: string[] = (ctx.header['x-api-key'] as string).split('.');
            const keyToValidate = process.env.API_SECRET_KEY as string;

            const requestTime = ctx.header['x-api-request-time'];

            if (requestKey.length !== 2) {
                ctx.status = 401;
                return;
            }
            if (crypto.createHash('md5').update(requestKey[0]).digest('hex')
                !== crypto.createHash('md5').update(keyToValidate).digest('hex')) {
                ctx.status = 401;
                return;
            }
            if (requestKey[1]
                !== crypto.createHash('md5').update(requestTime).digest('hex')) {
                ctx.status = 401;
                return;
            }
            if (!moment(requestTime).isValid() || 
                (Math.abs(moment(requestTime).diff(moment.utc()) / 1000) > (parseInt(process.env.API_REQUEST_BUFFER as string, 10)) )) {
                ctx.status = 401;
                return;
            }
            

            await next();
        }
        else
        {
            ctx.status = 400;
            ctx.body = 'Bad Request';
            return;
        }
    })
    .use(bodyparser())
    .use(v1Router.routes())
    .use(router.allowedMethods())
    .listen(3000);

exports.api = functions.https.onRequest(app.callback());
