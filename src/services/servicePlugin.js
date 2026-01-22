const { default: fastifyPlugin } = require('fastify-plugin');

const SubmissionService = require('./submissionService');

async function servicePlugin(fastify,options){
    fastify.decorate('submissionService',new SubmissionService(this.submissionRepository));
}

// converting function to a plugin
module.exports=fastifyPlugin(servicePlugin);