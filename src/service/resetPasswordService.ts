import bcrypt from 'bcrypt';

import User from '../model/userModel';

const resetPasswordService = async (token: string, newPassword: string) => {
    const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
    if (user) {
        user.password = await bcrypt.hash(newPassword, 10);
        user.resetToken = null;
        user.resetTokenExpiration = null;
        await user.save();
    } else {
        throw new Error('Invalid or expired reset token');
    }
};

export default resetPasswordService;
