import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Reminder API',
            version: '1.0.0',
            description: 'A professional Node.js API for managing tasks with automated reminders',
        }, 
        servers: [{

            url: 'http://localhost:8000',
            description: 'Development Server',
        }],
        compoents: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },

    apis: [
        './src/routes/*.js'
    ],
};

export const specs = swaggerJsdoc(options);