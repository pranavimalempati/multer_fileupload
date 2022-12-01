
const {upload} = require ('../middleware/middleware');
const controller = require('../controller/controller')
const router = require('express').Router();


router.post('/fileupload', upload.array('image'),controller.fileUpload)



module.exports = {router:router}