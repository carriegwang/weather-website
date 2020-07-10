const request = require('request')

const forecast = (x, y, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=122a803ae07f193c04fd418f87f1c1bc&query=' + y + ',' + x + '&units=f'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is " + body.current.temperature + " degrees. It feels like " + body.current.feelslike + " degrees. The chance of rain today is " + body.current.precip*10 + "%.")
        }
    })
}

module.exports = forecast