const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { query } = require('express')
const app = express()

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

console.log(publicDir)

app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDir))

app.get('', (req, res) => {
  res.render('index', {
    title:"Weather App",
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: "About",
    name: "Tim Vela",
    picture: "/images/robot.png"
  })
})

app.get('/weather', (req, res)=>{

  
  if(!req.query.address){
    res.send({
      error: "You must provide an address"
    })
  } else {
    
    geocode(req.query.address, (err, data) => {
      res.send({
        location: 'Kitchener',
        weather: 'it is cloudy',
        dataPOint: data
      })
    })



    
  }

  
})


app.get('/products', (req, res) =>{
  if(!req.query.search){
    res.send({
      error: 'you must provide a search term'
    })
  
  }else{
    res.send({
      products: [req.query.search]
    })  
  }

  
})

app.get('/help', (req, res)=>{
  res.render('help',{
    title: 'Help',
    text: 'help me'
  })
})




//app.com

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})

