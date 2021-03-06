const express = require('express');
const app = express();
const { connect } = require('mongoose');
const auth = require('./routers/Auth');
const user = require('./routers/User');
const post = require('./routers/Post');
require('dotenv').config();

// Connect database
const port = process.env.PORT || 1999;
connect(process.env.DATABASE, { useNewUrlParser: true ,useUnifiedTopology: true })
    .then(()=>{
        app.listen(port, ()=>{
            console.log(process.env.URL_HOST)
        })
    }).catch(err => console.log(err));


// Middleware
require('./middleware/App')(app);

// Routers
app.use(auth);
app.use(user);
app.use(post);