const fastify=require('fastify')({logger:true}); // calling the fastify constructor, to create the fastify object

const app = require('./app');
const connectToDB = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./utils/errorHandler');

// register the plugin with the fastify object
fastify.register(app);

fastify.setErrorHandler(errorHandler);

fastify.listen({port:serverConfig.PORT},async (err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);git
    }
    await connectToDB();
    console.log(`Server up at port ${serverConfig.PORT}`);
});