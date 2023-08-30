import { NextFunction, Response, Request } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`Incoming - Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        console.log(`Incoming - Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] `);
    });

    next();
};

export default logger;
