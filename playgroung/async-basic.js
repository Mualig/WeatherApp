console.log('Starting App');

setTimeout(() => {
    console.log('Inside callback 2000 ms');
}, 2000);

setTimeout(() => {
    console.log('Inside callback 0 ms');
}, 0);

console.log('Finishing app!');