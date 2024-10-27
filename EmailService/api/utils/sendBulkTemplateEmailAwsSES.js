const { SESClient, SendBulkTemplatedEmailCommand } = require('@aws-sdk/client-ses');
const { getTemplateNameByType } = require('../helpers/getTemplateName');
const { getDynamicTemplateDataByType } = require('../helpers/getDynamicTemplateData');
const { getTypeofSender } = require('../helpers/getSenderName');
const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_SES_REGION
}

//creating new ses service object
const sesClient = new SESClient(SES_CONFIG)

const sendBulkTemplateEmailAwsSES = async (users,type) => {
    const sendBulkTemplatedEmailCommand = new SendBulkTemplatedEmailCommand({
        Destinations: users.map((user) => ({
            Destination: { ToAddresses: [user?.Email_Id] },
            ReplacementTemplateData: JSON.stringify(getDynamicTemplateDataByType(user,type)),
        })),

        DefaultTemplateData: JSON.stringify({
            Student_Name: 'N/a',
            UID: 'N/a uid',
            LMS_User_Id: 'N/a username lms',
            LMS_Password: 'N/a password lms',
            CUCHD_Email: 'N/a username uni',
            CUCHD_Password: 'N/a password uni'
        }),
        Source: getTypeofSender(type),
        Template: getTemplateNameByType(type),
    })

    try {
        await sesClient.send(sendBulkTemplatedEmailCommand)
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendBulkTemplateEmailAwsSES