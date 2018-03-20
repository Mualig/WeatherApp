import config from './config/config.json';

const request = require('request');
const yargs = require('yargs');

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

encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.apiKey}`,
    json: true
}, (error, response, body) => {

    console.log(body);

    if (error) {
        console.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find address');
    } else if (body.status === 'OK') {
        console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
