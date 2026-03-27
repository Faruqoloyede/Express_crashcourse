const express = require('express');
const path = require('path');
const posts = require('./routes/posts');
const port = process.env.PORT || 8000;
const app = express();



// Routes
app.use('/api/posts', posts)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})