const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { body: JSON.stringify({ "text": "WELCOME, TO THE WOOOORLD OF TOMORROW!" })};
    }
});
