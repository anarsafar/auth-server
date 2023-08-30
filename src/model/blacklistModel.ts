import { Schema, model } from 'mongoose';
import { BlackListDocumentModel } from '../types/blacklistType';

const blacklistSchema = new Schema<BlackListDocumentModel>({
    token: { type: String, required: true },
    expiration: { type: Date, required: true },
    type: { type: String, required: true }
});

const BlacklistToken = model<BlackListDocumentModel>('BlacklistToken', blacklistSchema);

export default BlacklistToken;
