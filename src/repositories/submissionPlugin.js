const { default: fastifyPlugin } = require('fastify-plugin');

const SubmissionRepository = require('./submissionRepository');

async function submissionPlugin(fastify,options){
    fastify.decorate('submissionRepository',new SubmissionRepository());
}

// converting function to a plugin
module.exports=fastifyPlugin(submissionPlugin);