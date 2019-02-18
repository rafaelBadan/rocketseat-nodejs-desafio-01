const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

function checkAgePresence (req, res, next) {
  if (!req.query.age) {
    return res.redirect('/')
  } else {
    return next()
  }
}

app.get('/', (req, res) => {
  return res.render('new')
})

app.post('/check', (req, res) => {
  const { age } = req.body

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
})

app.get('/major', checkAgePresence, (req, res) => {
  const { age } = req.query
  return res.render('major', { age })
})

app.get('/minor', checkAgePresence, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.listen(3000)
