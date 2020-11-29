const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const addr = process.argv[2]
if(!addr){

    console.log('please provide an address')
}else{
    geocode(addr, (error, data) => {
        // console.log(error)
        // console.log(data)
        forecast(data, (error, {weatherdesc, feelsliketemp, currenttemp, location}) => {
            console.log('In ' + data.location + ' it is currently ' + weatherdesc + ', with a tempurature of ' + currenttemp + ' but feels like ' + feelsliketemp)
        })
    })
}