import { Request } from 'express';

export interface UserPayload {
    userId: string;
}

export interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}
