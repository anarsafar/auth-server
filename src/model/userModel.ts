import { Schema, model } from 'mongoose';
import { UserDocumentModel } from '../types/userType';

const userSchema = new Schema<UserDocumentModel>(
    {
        email: { type: String },
        password: { type: String },
        name: { type: String },
        bio: { type: String },
        phone: { type: String },
        image: { type: String },
        confirmed: { type: Boolean, default: false },
        confirmationToken: { type: String },
        resetToken: { type: String },
        resetTokenExpiration: { type: Number },
        googleId: { type: String },
        facebookId: { type: String },
        githubId: { type: String }
    },
    {
        versionKey: false
    }
);

const User = model<UserDocumentModel>('User', userSchema);

export default User;
