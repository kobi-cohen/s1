const express = require('express')

const app = express()
let port = process.env.PORT || 3000;

console.log('the server is running :)')

app.get('/',(req,res)=>{
    console.log('done !')
    console.log(process.env)
    res.json({name:'success'})
})

app.listen(port)