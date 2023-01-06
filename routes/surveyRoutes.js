const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireLogin = require('../middlewares/requireCredit')
const requireCredit = require('../middlewares/requireCredit')

const Survey = mongoose.model('surveys')

module.exports = app => {
 app.post('api/surveys', requireLogin, requireCredit, (req, res) => {
  const { title, subject, body, recipients } = req.body

  const survey = new Survey({
   title,
   subject, 
   body,
   recipients: recipients.split(',').map(email => ({ email: email.trim() })),
   _user: req.user.id,
   dateSent: Date.now()
  })
 })
}

