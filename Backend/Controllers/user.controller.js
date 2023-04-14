const User = require("../Models/User");

exports.show = async (req, res) => {
  try {
    const data = await User.find();
    
    return res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

exports.showByID = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    return res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

exports.update=async (req,res)=>{
    try {
	const data= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
	    return res.json({data:data})
} catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });

}

}

exports.delete=async (req,res)=>{
    try {
	const data= await User.findByIdAndDelete(req.params.id)
	    return res.json({data:data})
} catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });

}

}
