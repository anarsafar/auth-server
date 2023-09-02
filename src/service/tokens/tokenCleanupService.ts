import schedule from 'node-schedule';
import BlacklistToken from '../../model/blacklistModel';
import { config } from '../../config';

const cleanupBlacklist = async () => {
    try {
        const now = new Date();
        await BlacklistToken.deleteMany({ expiration: { $lt: now } })
            .maxTimeMS(12000)
            .exec();

        console.log('Expired tokens removed from blacklist');
    } catch (error: any) {
        if (error.name === 'MongooseError' && error.message.includes('buffering timed out')) {
            console.error('Database operation timed out:', logMessage(error));
        } else {
            console.error('Error cleaning up blacklist:', logMessage(error));
        }
    }
};

const logMessage = (message: any) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
};

export const scheduler = () => schedule.scheduleJob(`${config.scheduleConfig}`, cleanupBlacklist);
