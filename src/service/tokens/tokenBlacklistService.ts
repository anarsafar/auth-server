import BlacklistToken from '../../model/blacklistModel';

const addToBlacklist = async (token: string, decodedTokenExp: number, type: string) => {
    try {
        const existingToken = await BlacklistToken.findOne({ token });

        if (existingToken) {
            throw new Error('Token already exists in the blacklist');
        }

        const expiration = new Date(decodedTokenExp * 1000);

        if (type === 'access') {
            expiration.setHours(expiration.getHours() + 5);
        } else if (type === 'refresh') {
            expiration.setDate(expiration.getDate() + 7);
        }

        const newBlacklistToken = new BlacklistToken({
            token,
            expiration,
            type
        });

        await newBlacklistToken.save();
    } catch (error) {
        throw new Error('Unable to add token to blacklist');
    }
};

export default { addToBlacklist };
