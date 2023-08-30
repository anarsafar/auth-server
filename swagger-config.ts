import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Auth Server API',
            version: '1.0.0',
            description: 'API documentation for Auth Server'
        }
    },
    apis: ['src/routes/**/*.ts']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
