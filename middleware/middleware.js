const multer = require('multer');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null, `${new Date().toISOString()}--${file.originalname}`)
    }
});

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/tiff' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const upload = multer({storage:storage,limits: { fileSize: 1000000 }
    , fileFilter:fileFilter})


module.exports = {upload}