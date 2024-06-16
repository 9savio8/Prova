const express = require('express')
const app = express()
const fs = require('fs').promises
app.use(express.JSON())

app.get('/', async (req, res)=>{
    console.log('prova get')
    try{
        const data =await fs.readFile('prova.txt', 'utf8')
        res.send(data)
    }catch(err){
        res.status(500).send('errore durante la lettura del file')
    }
})


app.listen(3000, ()=>{
    console.log('server in ascolto alla porta http://localhost:3000')
})