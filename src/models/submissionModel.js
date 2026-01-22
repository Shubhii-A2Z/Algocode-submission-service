const mongoose=require('mongoose');

const submissionSchema=new mongoose.Schema({
    userId: {
        type: String,
        required: [true,"UserId is required"]
    },
    problemId: {
        type: String,
        required: [true,"ProbemId is required"]
    },
    code: {
        type: String,
        required: [true,"Code is required"]
    },
    language: {
        type: String,
        required: [true,"Language is required"]
    },
    status: {
        type: String,
        enum: ["Pending","Success","TLE","MLE","WA","RE"],
        default: "Pending"
    }
});

const Submission=mongoose.model('Submission',submissionSchema);

module.exports=Submission;