const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

let posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'},
    {id:3, title: 'Post Three'},
]


// get all posts
app.get('/api/posts', (req, res)=>{
    res.json(posts);
});

// get single posts
app.get('/api/posts/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const data = posts.filter((post)=> post.id === id);
    res.json(data);
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})