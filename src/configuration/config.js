module.exports = {

    web: {
        port: process.env.PORT || process.port || 4040
    },

    app: {
        main: {
            html: 'src/interface/main.html',
            size: { /* to be continued... */ }
        }
    }

}