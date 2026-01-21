const pingCheck = require("../services/submissionService");

async function pingRequest(req,resp){
    console.log(this.testService);
    const response=await pingCheck();
    return resp.send({data: response});
}

async function createSubmission(req,resp){
    const response=this.submissionService.addSubmission(req.body);
} 

module.exports={
    pingRequest,
    createSubmission
};