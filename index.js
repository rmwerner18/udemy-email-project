const express = require('express');
const passport = require('passport')
const googleStrategy = require('passport-google-oauth-20').Strategy
const keys = require('./config/keys')

const app = express();

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
}, accessToken => {
    console.log(accessToken)
}))


// app.get('/', (req, res) => {
//     res.send({ bye: 'there' })
// })

const PORT = process.env.PORT || 5000

app.listen(PORT)