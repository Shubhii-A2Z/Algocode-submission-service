const { default: fastifyPlugin } = require('fastify-plugin');

const testService=require('./testService');

async function servicePlugin(fastify,options){
    fastify.decorate('testService',testService);
}

// converting function to a plugin
module.exports=fastifyPlugin(servicePlugin);