const Notes = require("../Models/Notes");

exports.show = async (req, res) => {
  try {
    const data = await Notes.find();
    
    return res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

exports.showByID = async (req, res) => {
  try {
    const data = await Notes.findById(req.params.id);
    return res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

exports.update=async (req,res)=>{
    try {
	const data= await Notes.findByIdAndUpdate(req.params.id,req.body,{new:true})
	    return res.json({data:data})
} catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });

}

}

exports.delete=async (req,res)=>{
    try {
	const data= await Notes.findByIdAndDelete(req.params.id)
	    return res.json({data:data})
} catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });

}
}
exports.create=async (req,res)=>{
  try {
const data= await Notes.create(req.body)
    return res.json({data:data})
} catch (error) {
  res.status(500).json({ error: "Something Went Wrong" });

}

}
