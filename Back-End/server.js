const express = require('express');
const app = express();
const port = 5000
const {startDatabase, stopDatabase, isConnect} = require('./db')


app.get('/ping',(req,res) =>{
    res.send('pong');
})

app.listen(port, () => {
    startDatabase()
    console.log(`Server is running on port ${port}`);
  })