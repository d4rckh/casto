var express = require('express')
var app = express();

app.use('/', require('./routes/root'))
app.use('/api', require('./routes/api'))

app.listen(process.config.web.port, () => {
    console.log('Controller started!')
})