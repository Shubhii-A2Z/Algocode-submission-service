async function submissionRoutes(fastify,options){
    fastify.post('/',async (req,resp)=>{
        return {data: ['todo']};
    });
}

module.exports=submissionRoutes;