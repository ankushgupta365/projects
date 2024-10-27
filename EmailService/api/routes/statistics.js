
const { getStatistics } = require("../controller/statistics");
const router = require('express').Router()


router.route('/').get(getStatistics)



module.exports = router