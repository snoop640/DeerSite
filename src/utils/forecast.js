const request = require('request')

const forecast =  (latitude, longitude, callback) => {
    const url = + longitude + ',' + latitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services! :(', undefined)
        }else if (body.error) {
            callback('Unable to find location! :( Please double check your entry.', undefined)
        } else {
           callback(undefined, 'Here is where you put the deer information')
        }          
    })
}

module.exports = forecast