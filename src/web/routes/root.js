var express = require('express')
var router = express.Router()

var ipc = process.ipcMain

var path = require('path');

router.get('/', (req, res) => {
    ipc.send('newUser')
    res.sendFile(path.resolve('src/web/views/indexweb.html'));
})

module.exports = router