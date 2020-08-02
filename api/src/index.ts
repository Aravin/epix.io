// import crypto from 'crypto';

import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './services/email';
import { authentication } from './middleware/authentication';

dotenv.config();

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// app.use(helmet());
app.use(authentication);

app.get('/v1/version', (req, res) => res.send({ version: process.env.VERSION }));

app.post('/v1/email', (req, res) => sendEmail(req, res));

app.all('/*', (req, res) => res.status(404).send('Invalid Path'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
