const express = require('express');
const path = require('path')
const cors = require ('cors')
const bodyParser = require('body-parser')
const app = express()

const router = require('./router/router')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
const port = process.env.PORT || 3000
console.log("hello world")
app.use('/',router.router)
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})