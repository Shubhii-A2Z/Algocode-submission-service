const fastify=require('fastify')({logger:true}); // calling the fastify constructor, to create the fastify object

const app = require('./app');

const PORT=3000;

// register the plugin with the fastify object
fastify.register(app);

fastify.listen({port:PORT},(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server up at port ${PORT}`);
});