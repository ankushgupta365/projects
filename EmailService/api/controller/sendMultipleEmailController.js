const csv = require('csvtojson')
// const sendEmail = require('../utils/emailMultiple')
const sendBulkTemplateEmailAwsSES = require('../utils/sendBulkTemplateEmailAwsSES')
const fs = require('fs')

//send multiple email using sendgrid
// const sendMultipleEmail = async (req, res) => {
//     try {
//         const file = req.file
//         if (!file) {
//             throw new Error('Please upload a file')
//         }
//         const jsonArrayData = await csv().fromFile(req.file.path);
//         for (const recipient of jsonArrayData) {
//             const dynamicTemplateData = {
//                 fullname: recipient?.Student_Name,
//                 uid: recipient?.UID,
//                 usernameLms: recipient?.LMS_User_Id,
//                 passwordLms: recipient?.LMS_Password,
//                 usernameUni: recipient?.CUCHD_Email,
//                 passwordUni: recipient?.CUCHD_Password
//             }
//             const to = recipient.Email_Id
//             await sendEmail(to, process.env.SENDDGRID_SENDER, 'UIMS and LMS credentials-Chandigarh University Online Learning', process.env.SENDGRID_CREDENTIALS_TEMPLATEID, dynamicTemplateData);
//         }
//         res.status(201).json({ msg: "All mail sent successfully" })
//     } catch (error) {
//         res.status(400).json({ msg: error.message })
//     }
// }

//send multiple email using amazon ses
const sendMultipleEmailSES = async (req, res) => {
    try {
        const file = req.file
        if (!file) {
            throw new Error('Please upload a file')
        }
        const jsonArrayData = await csv().fromFile(req.file.path)
        //sending email in blocking way after every 4 second with limit of 100
        async function sendEmailInBlockingWay() {
            for (let i = 0; i < jsonArrayData.length; i = i + 50) {
                const tempSenders = jsonArrayData.slice(i, i+50)
                await sendBulkTemplateEmailAwsSES(tempSenders, req.body.type)
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
        await sendEmailInBlockingWay()
        fs.unlink(req.file.path, (err) => {
            if (err) throw err;
        })
        res.status(201).json({ msg: "All mail sent successfully" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    // sendMultipleEmail,
    sendMultipleEmailSES
}
