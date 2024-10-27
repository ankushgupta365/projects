
//get template name according to type
const getTemplateNameByType = (type)=>{
    let templateName = ''
    switch (type) {
        case 'ol':
            templateName = process.env.AWS_SES_CREDENTIAL_IDOL_TEMPLATE_OL
            break;
        case 'odl':
            templateName = process.env.AWS_SES_CREDENTIAL_IDOL_TEMPLATE_ODL
            break;
        case 'pending_documents':
            templateName = process.env.AWS_SES_CREDENTIAL_IDOL_TEMPLATE_PENDING
            break;
        case 'pending_documents_odl':
            templateName = process.env.AWS_SES_CREDENTIAL_IDOL_TEMPLATE_PENDING_ODL
            break;
        case 'fees_reminder':
            templateName = process.env.AWS_SES_CREDENTIAL_IDOL_TEMPLATE_FEES_REMINDER
            break;
        case 'exam_reminder':
            templateName = process.env.AWS_SES_EXAM_ANNOUNCEMENT_ANOTHER
            break;
        default:
            templateName = process.env.AWS_SES_CREDENTIAL_IDOL_TEMPLATE_DEFAULT
            break;
    }
    return templateName
}

module.exports = {
    getTemplateNameByType
}