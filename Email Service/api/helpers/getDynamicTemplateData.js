
//dynamic template data
const getDynamicTemplateDataByType = (user,type) => {
    let dynamicTemplateData = {}
    switch (type) {
        case 'ol':
            dynamicTemplateData = {
                Student_Name: user?.Student_Name,
                UID: user?.UID,
                LMS_User_Id: user?.LMS_User_Id,
                LMS_Password: user?.LMS_Password,
                CUCHD_Email: user?.CUCHD_Email,
                CUCHD_Password: user?.CUCHD_Password
            }
            break;
        case 'odl':
            dynamicTemplateData = {
                Student_Name: user?.Student_Name,
                UID: user?.UID,
                LMS_User_Id: user?.LMS_User_Id,
                LMS_Password: user?.LMS_Password,
                CUCHD_Email: user?.CUCHD_Email,
                CUCHD_Password: user?.CUCHD_Password
            }
            break;
        case 'pending_documents':
            dynamicTemplateData = {
                Name: user?.Name,
                UserId: user?.UserId,
                DateString: user?.DateString,
                Pending_Documents: user?.Pending_Documents,
            }
            break;
        case 'pending_documents_odl':
            dynamicTemplateData = {
                Name: user?.Name,
                UserId: user?.UserId,
                DateString: user?.DateString,
                Pending_Documents: user?.Pending_Documents
            }
            break;
        case 'fees_reminder':
            dynamicTemplateData = {
                Name: user?.Name,
                UserId: user?.UserId,
                Program_Name: user?.Program_Name,
                Pending_Amount: user?.Pending_Amount,
                UID: user?.UID
            }
            break;
        case 'exam_reminder':
            dynamicTemplateData = {
                Name: user?.Name,
            }
            break;
        default:
            dynamicTemplateData = {

            }
            break;
    }
    return dynamicTemplateData
}

module.exports = {
    getDynamicTemplateDataByType
}