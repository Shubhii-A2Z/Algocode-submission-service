const { StatusCodes } = require("http-status-codes");
const pingCheck = require("../services/submissionService");

async function pingRequest(req,resp){
    console.log(this.testService);
    const response=await pingCheck();
    return resp.send({data: response});
}

async function createSubmission(req,resp){
    const response=this.submissionService.addSubmission(req.body);
    return resp.status(StatusCodes.CREATED).send({
        error: {},
        data: response,
        success: true,
        message: 'Created Submission Successfully'
    });
} 

module.exports={
    pingRequest,
    createSubmission
};