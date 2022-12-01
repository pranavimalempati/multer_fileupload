
const fileUpload = async (req,res)=>{
    try {
        const file = req.files;
        console.log(file);

        if(file){
        res.status(200).json({
            status : "success",
            response:file,
            message:"sucessfully uploaded"});
        }else{
            res.status(400).json({
                status : "fail...",
                message:"only tiff extention is allowed"
            })
        }
    } catch (error) {
        res.status(400).json({
            status : "fail...",
            response:"file not uploaded",
            message:error.message});
    }
}


module.exports = {fileUpload}



