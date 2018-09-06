var express = require('express')
var router = express.Router()

var ipc = process.ipcMain

var path = require('path');

router.get('/controller', (req, res) => {
    res.sendFile(path.resolve('src/web/views/indexweb.html'));
})

router.get('/', (req, res) => {

    process.newUser()
    setTimeout(() => {
        ipc.send('newUser')
    }, 1000)

    res.redirect('/controller')
})

module.exports = router 