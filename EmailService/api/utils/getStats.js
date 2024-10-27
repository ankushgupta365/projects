const { SESClient, GetSendStatisticsCommand } = require("@aws-sdk/client-ses")

const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_SES_REGION
}

//creating new ses service object
const sesClient = new SESClient(SES_CONFIG)



const getBounceInfo = async () => {
    try {
        const input = {};
        const command = new GetSendStatisticsCommand(input);
        const response = await sesClient.send(command);
        return response
    } catch (error) {
        console.error('Error retrieving bounce information:', error);
    }
};

module.exports = {
    getBounceInfo
}