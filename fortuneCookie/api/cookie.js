const express = require('express')
const fortuneCookie = require('fortune-cookie')
const morgan = require('morgan')

const cookies = () => {
    const idx = Math.floor(Math.random() *fortuneCookie.length)
    return fortuneCookie[idx]
}

//module
module.exports = (req, resp) => {
    //create express instance
    const app = express();

    //use morgan to log all request. Use the combined format
    app.use(morgan('combined'))

    //resources
    //GET /api/cookie -> application/json {cookie: 'cookie text' }

    app.get('/api/cookie', (req, resp) => {
        
        const count = parseInt(req.query['count']) || 1
        
        resp.status(200)
        resp.type('application/json')
        if(count == 1)
            resp.json({cookie: cookies()})
        else{
            const array = [];
            for(let i = 0; i < count; i++)
                array.push({cookie: cookies()})
            resp.json(array)
        }
    })

    //error handling
    app.use((req, resp) => {
        resp.redirect('/')
    })

    //no app.listen, pass req, resp to express
    app(req, resp)

}