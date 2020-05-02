const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, "../main.html"))
})

app.use('/build', express.static(path.join(__dirname, '../build')));

app.listen(PORT, ()=>{ 
  console.log(
    `Server is now running on ${PORT}...`
)})
