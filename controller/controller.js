
const Jimp = require("jimp");
const fs = require("fs");

const fileUpload = async (req,res)=>{
    try {
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
            }
            filesArray.push(file)
        })
        
        if(filesArray){
        res.status(200).json({
            status : "success",
            response:filesArray,
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


const converter = async (req,res)=>{
    try {
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
            }
            Jimp.read(`${file.filePath}` ,function(error,file){
                if(error){
                    console.log(error)
                }else{
                  file.write(`uploads/${new Date().toISOString()}-new_img.png`)
                }
             } 
             )
             console.log(file.filePath)
             fs.unlinkSync(`${file.filePath}`)



            });
           
        res.status(200).json({
            status : "success",
            message:"sucessfully converted and deleted"
        });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status : "fail...",
            response:"file not converted",
            message:error.message});
        
    }
    
}

const blob = async(req,res)=>{
    try {
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
            }
        const base64str = base64_encode(file.filePath);
        console.log(base64str.toString());
   function base64_encode(file) {
    return fs.readFileSync(file);
   }
       const dir = './uploads'
   fs.rmdirSync(dir, { recursive: true });  
   res.send({data:base64str.toString(),
message:"created the blob and deleted the folder"})

})
    } catch (error) {
        console.log(error.message)
        res.send({status:"fail..",
    message:error.message});
    }
}
      

module.exports = {fileUpload,converter,blob}