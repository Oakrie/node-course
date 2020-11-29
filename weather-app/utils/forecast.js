const request = require('request')

const forecast = ({latitude, longitude}, callback) => {
    // 'http://api.weatherstack.com/current?access_key=67e7cf938436d33b0ec868fa4f8a90e9&query=0,0&units=f'
    var weatherurl = 'http://api.weatherstack.com/current?access_key=67e7cf938436d33b0ec868fa4f8a90e9&query='+encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)
    // const weatherurl = 'http://api.weatherstack.com/current?access_key=67e7cf938436d33b0ec868fa4f8a90e9&query=' + longitude + ',' + latitude
    console.log(weatherurl)
    request({ url: weatherurl, json: true }, (err, {body}) => {
        if(err){
            callback('Unable to connect to the weather service',undefined)
        } else if(body.error){
            callback(body.error.info,undefined)
        } else {
            callback(undefined, {
                weatherdesc: body.current.weather_descriptions[0],
                currenttemp: body.current.temperature,
                feelsliketemp: body.current.feelslike
            })
        }  
    })
}

module.exports = forecast
