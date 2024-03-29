const request = require('request')

const geocode = (addr, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(addr) + '.json?limit=2&access_token=pk.eyJ1Ijoib2FrcmllIiwiYSI6ImNrZzQyeDFvMTBiYmkyeW1meTNyNHNpdW8ifQ.Qb2AZiU8AuLZP9NQBfdFzg&limit=1'
    request({url: url, json: true}, (err, {body}) => {
        if(err){
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
