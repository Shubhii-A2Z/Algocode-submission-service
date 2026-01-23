const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/baseError");

function errorHandler(error,req,resp){
    if(error instanceof BaseError){
        resp.status(error.statusCode).send({
            success: false,
            error: error.details,
            message: error.message,
            data: {} // since this is an exception hence no data is being provided
        });
    }
    else{
        resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Something went wrong!',
            error: error.message || error,
            data: {} // since this is an exception hence no data is being provided
        });
    }
}

module.exports=errorHandler;