const BinModel = require("../models/BinModel.js");

const getBinById = async (req, res) => {
  try {
    const bins = req.params.id;
    const bin = bins.replace(' ', '');
    const binslic = bin.slice(0, 5);
    const binModel = await BinModel.findOne({ bin: binslic });
    if(binModel === null){
      const bin6 =  bin.slice(0, 6);
        const binModel6 = await BinModel.findOne({ bin: bin6 });
        if(binModel6 === null){
            res.status(404).json({ message: "Bin Not Found" });
        }else{
            res.status(200).json(binModel6);
            }
    }else{
        res.status(200).json(binModel);
    }

    // console.log(binslic);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = getBinById;
