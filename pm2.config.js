module.exports = {
    apps: [
        {
            name: 'cleanup-tokens',
            script: './build/src/service/tokens/tokenCleanupService.js',
            watch: true,
            exec_mode: 'cluster',
            cron_restart: '0 * * * *',
            env: {
                NODE_ENV: 'production'
            },
            output: './logs/cleanup-tokens-out.log',
            error: './logs/cleanup-tokens-error.log'
        }
    ]
};
