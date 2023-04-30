const JpPostal = require('../models/JpPostalModel.js');

const getJpPostalsById = async (req, res) => {
    try {
        const postalCode = req.params.id;
        const postalrp = postalCode.replace('〒', '');
        const postalrx = postalrp.replace('-', '');
        const postalsp = postalrx.replace(' ', '');
        const jpPostal = await JpPostal.findOne({ postalCode: postalsp });
        res.status(200).json(jpPostal); 

        // console.log(postalsp);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = getJpPostalsById;