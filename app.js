const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const request = require ('request');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for.',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

request({
    url: `https://api.darksky.net/forecast/c7cd3821ff32a7fca3cc847588fb960d/48.390394,-4.486076?units=auto`,
    json: true
}, (error, response, body) => {

    if (!error && response.statusCode === 200) {
        console.log(body.currently.summary, body.currently.temperature)
    } else {
        console.log('Unable to fetch weather.');
    }
});