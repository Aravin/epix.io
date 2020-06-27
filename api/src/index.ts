import * as functions from 'firebase-functions';

import koa from 'koa';
import Router from 'koa-router';
import { v1Router } from './api/v1/api';
import dotenv from 'dotenv';

dotenv.config();

const app = new koa();
const router = new Router();

app
    .use(v1Router.routes())
    .use(router.allowedMethods())
    .listen(3000);

exports.api = functions.https.onRequest(app.callback());
