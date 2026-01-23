const { StatusCodes } = require("http-status-codes");
const BaseError = require("./baseError");

class SubmissionCreationError extends BaseError{
    constructor(details){
        super("Submission creation error",StatusCodes.BAD_REQUEST,details);
    }
}

module.exports=SubmissionCreationError;