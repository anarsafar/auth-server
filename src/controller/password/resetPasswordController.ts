import { Request, Response } from 'express';
import resetPasswordService from '../../service/resetPasswordService';

const resetPassword = async (req: Request, res: Response) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        await resetPasswordService(token, password);

        return res.render('result', { resultHeader: 'Reset password result', resultMessage: 'Password reset successful' });
    } catch (error) {
        return res.render('result', { resultHeader: 'Reset password result', resultMessage: `An error occurred while resetting password: ${error}` });
    }
};

const showResetPage = (req: Request, res: Response) => {
    const { token } = req.params;
    res.render('reset-password', { token });
};

export default { resetPassword, showResetPage };
