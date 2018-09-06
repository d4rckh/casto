var express = require('express')
var router = express.Router()

var ipc = process.ipcMain

router.get('/sendTEXT', (req, res) => {
    ipc.send('text', {
        text: {
            display: `<span style="font-size: ${req.query['size']}">` + req.query['text'] + `</span><br>`
        },
        others: {
            clearScreen: req.query['clear']
        }
    })
    res.redirect('/controller')
})

router.get('/sendVIDEO', (req, res) => {
    ipc.send('video', {
        video: {
            display: req.query['id']
        },
        others: {
            fullscreen: req.query['fullscreen']
        }
    })
    res.redirect('/controller')
})

router.get('/sendLINK', (req, res) => {
    ipc.send('link', {
        link: {
            display: req.query['link']
        },
        others: {
            fullscreen: req.query['fullscreen']
        }
    })
    res.redirect('/controller')
})

router.get('/panic', (req, res) => {
    ipc.send('panic', null)
    res.redirect('/controller')
})

module.exports = router