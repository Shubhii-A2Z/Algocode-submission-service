const fastifyPlugin=require('fastify-plugin');

const servicePlugin = require('./services/servicePlugin');
const submissionPlugin = require('./repositories/submissionPlugin');

async function app(fastify,options){
    await fastify.register(require('@fastify/cors'));

    await fastify.register(submissionPlugin);

    // register test routes
    await fastify.register(require('./routes/api/apiRoutes'),{prefix: '/api'});

    await fastify.register(servicePlugin);
}

// converting this function to a plugin
module.exports=fastifyPlugin(app);