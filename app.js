const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
