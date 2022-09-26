const express = require('express');
const passport = require('passport')
const googleStrategy = require('passport-google-oauth-20').Strategy

const app = express();

passport.use(new googleStrategy())


// app.get('/', (req, res) => {
//     res.send({ bye: 'there' })
// })

const PORT = process.env.PORT || 5000

app.listen(PORT)