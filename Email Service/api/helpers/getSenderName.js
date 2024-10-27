const getTypeofSender = (type)=>{
    if(type == "exam_reminder")
        return process.env.AWS_SES_SENDER_EXAM
    else
        return process.env.AWS_SES_SENDER
}

module.exports = {
    getTypeofSender
}