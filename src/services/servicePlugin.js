const { default: fastifyPlugin } = require('fastify-plugin');

const SubmissionService = require('./submissionService');

async function servicePlugin(fastify,options){
    fastify.decorate('submissionService',new SubmissionService(fastify.submissionRepository));
}

// converting function to a plugin
module.exports=fastifyPlugin(servicePlugin); 