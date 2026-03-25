const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

let posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'},
    {id:3, title: 'Post Three'},
]

// setup static folder

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/posts', (req, res)=>{
    res.json(posts);
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})