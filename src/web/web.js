var express = require('express')
var app = express();

module.exports = (ipc) => {

    app.get('/', (req, res) => {
        ipc.send('newUser')
        res.sendFile(__dirname + '/views/indexweb.html')
    })

    app.get('/sendTEXT', (req, res) => {
        ipc.send('text', {
            text: {
                display: `<span style="font-size: ${req.query['size']}">` + req.query['text'] + `</span><br>`
            },
            others: {
                clearScreen: req.query['clear']
            }
        })
        res.redirect('/')
    })

    app.get('/sendVIDEO', (req, res) => {
        ipc.send('video', {
            video: {
                display: req.query['id']
            },
            others: {
                fullscreen: req.query['fullscreen']
            }
        })
        res.redirect('/')
    })

    app.get('/sendLINK', (req, res) => {
        ipc.send('link', {
            link: {
                display: req.query['link']
            },
            others: {
                fullscreen: req.query['fullscreen']
            }
        })
        res.redirect('/')
    })

    app.get('/panic', (req, res) => {
        ipc.send('panic', null)
        res.redirect('/')
    })

    app.listen(process.config.web.port, () => {
        console.log('Controller started!')
    })
}