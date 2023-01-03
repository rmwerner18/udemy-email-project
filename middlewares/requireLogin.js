module.exports = (req, res, next) => {
 if (!user) {
  return res.status(401).send({error: 'You must login'})
 }

 next()
}