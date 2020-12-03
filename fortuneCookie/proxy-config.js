module.exports = [
    {
        context: [ '/api' ],
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
    },
    //if there are more servers
    // {
    //     context: [ '/menu' ],
    //     target: 'http://localhost:3200',
    //     secure: false,
    //     logLevel: 'debug'
    // }
]