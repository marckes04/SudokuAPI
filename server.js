const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())


app.post('/solve',(req,res) => {

    console.log(req.body)
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: {
            puzzle : '2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3'
        }
    }
    
    axios.request(options).then((response) => {
        console.log(response.data);
        res.json(response.data)
        
    }).catch((error) => {
        console.error(error);
    });

})

app.listen(PORT, () => console.log(`server listenning on PORT ${PORT}`))


