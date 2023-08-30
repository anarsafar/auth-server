import schedule from 'node-schedule';
import BlacklistToken from '../../model/blacklistModel';

schedule.scheduleJob('0 * * * *', async () => {
    try {
        const now = new Date();
        await BlacklistToken.deleteMany({ expiration: { $lt: now } }).exec();
        console.log('Expired tokens removed from blacklist');
    } catch (error) {
        console.error('Error cleaning up blacklist:', error);
    }
});
