module.exports = {

    web: {
        port: process.env.PORT || process.port || 4040
    },

    app: {
        main: {
            html: 'src/interface/main.html'
        },
        screen: {
            html: 'src/interface/screen.html'
        }
    }

}