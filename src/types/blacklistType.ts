import { Document } from 'mongoose';

interface BlackListDocument {
    token: string;
    expiration: Date;
    type: 'refresh' | 'access';
}

export interface BlackListDocumentModel extends BlackListDocument, Document {}
