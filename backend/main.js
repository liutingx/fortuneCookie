//load libraries
const express = require('express')
const fortuneCookie = require('fortune-cookie')
const morgan = require('morgan')
const cors = require('cors');

const cookies = () => {
    const idx = Math.floor(Math.random() *fortuneCookie.length)
    return fortuneCookie[idx]
}

//set PORT
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

//create express instance
const app = express();

//use morgan to log all request. Use the combined format
app.use(morgan('combined'))

//if want to use cors for everything
//app.use(cors())

//serve frontend
app.use(express.static(__dirname + '/fortuneCookie'))

//resources
//GET /api/cookie -> application/json {cookie: 'cookie text' }

app.get('/api/cookie', cors(), (req, resp) => {
    
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

//start the server
app.listen(PORT, () => {
    console.log(`Application started at PORT ${PORT} at ${new Date()}`)
})