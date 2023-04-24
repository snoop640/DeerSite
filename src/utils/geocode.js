const request = require("request")

const geocode =  (address, callback) => {
    const url = 

    ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services! :(', undefined)
        }else if (body.features.length === 0) {
            callback('Unable to find location! :( Please double check your entry.', undefined)
        } else {
           callback(undefined, {
               latitude: 
               longitude:
               county: 
           })
        }          
    })
}


module.exports = geocode