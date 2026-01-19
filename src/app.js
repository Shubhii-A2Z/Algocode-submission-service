const fastifyPlugin=require('fastify-plugin');

const servicePlugin = require('./services/servicePlugin');

async function app(fastify,options){
    fastify.register(require('@fastify/cors'));

    // register test routes
    fastify.register(require('./routes/api/apiRoutes'),{prefix: '/api'});

    fastify.register(servicePlugin);
}

// converting this function to a plugin
module.exports=fastifyPlugin(app);