const fs = require('fs')

data = fs.readFileSync('1-json.json')
data = data.toString()
data = JSON.parse(data)
data.name = 'tim'
data.age = '21'

data = JSON.stringify(data)

fs.writeFileSync('1-json.json', data)