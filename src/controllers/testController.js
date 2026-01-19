const pingCheck = require("../services/testService");

async function pingRequest(req,resp){
    console.log(this.testService);
    const response=await pingCheck();
    return resp.send({data: response});
}

module.exports={pingRequest};