const express = require('express');

const app = express();


function getPosts (){


app.get('/api/posts', (req, res)=>{
    res.json(posts);
});
}

export default getPosts;