import { NextFunction, Response, Request } from 'express';

const logError = (req: Request, res: Response, next: NextFunction) => {
    const errorMessage = new Error('Request not found');

    console.error(errorMessage);

    res.status(404).json({
        error: errorMessage.message
    });

    next();
};

export default logError;
