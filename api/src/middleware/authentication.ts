import e from 'express';
import crypto from 'crypto';
import { isInvalidString } from '../model/utility/string';
import moment from 'moment';

export async function authentication(req: e.Request, res: e.Response, next: e.NextFunction) {

    const requestTime = req.headers["x-api-request-time"]?.toString() + '';
    const requestToken = req.headers["x-api-token"]?.toString() + '';

    if (isInvalidString(requestTime)
        || isInvalidString(requestToken)
        || moment.utc().diff(moment.utc(requestTime), 'seconds') > parseInt(process.env.API_REQUEST_BUFFER || '1000', 10)) {
        return res.status(401).send('401 Unauthorized - Request Time Mismatch');
    };

    const hashedRequestTime = crypto.createHash('md5').update(requestTime).digest('hex');
    const hashedHostName = crypto.createHash('md5').update('epix.io').digest('hex');
    const secretKey = hashedHostName + '.' + hashedRequestTime;
    const serverKey = crypto.createHash('md5').update(secretKey).digest('hex');
    console.log(serverKey)

    if (serverKey !== requestToken) {
        return res.status(401).send('401 Unauthorized - Invalid Token');
    };
    next();
}
