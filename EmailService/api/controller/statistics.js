const {getBounceInfo} = require("../utils/getStats")

const getStatistics = async(req,res)=>{
    try {
        const response = await getBounceInfo()
        res.status(200).json({response})
    } catch (error) {
        res.status(401).json({msg: error.message})
    }
}

module.exports = {
    getStatistics
}