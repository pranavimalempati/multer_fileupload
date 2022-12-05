
const {upload} = require ('../middleware/middleware');
const controller = require('../controller/controller')
const router = require('express').Router();


router.post('/fileupload', upload.array('image'),controller.fileUpload)
router.post('/converter',upload.array('image'),controller.converter)
router.post('/blob',upload.array('image'),controller.blob)


module.exports = {router:router}