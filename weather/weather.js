const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c7cd3821ff32a7fca3cc847588fb960d/${latitude},${longitude}?units=auto`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, body.currently.temperature);
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports = {
    getWeather
};