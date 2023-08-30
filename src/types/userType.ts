import { Document } from 'mongoose';

interface UserDocument {
    email: string | null;
    password: string;
    name: string;
    bio: string;
    phone: string;
    image: string;
    confirmed: boolean;
    confirmationToken: string | null;
    resetToken: string | null;
    resetTokenExpiration: number | null;
    googleId: string | null;
    facebookId: string | null;
    githubId: string | null;
}

export interface UserDocumentModel extends UserDocument, Document {}
