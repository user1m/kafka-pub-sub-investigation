// var mosca = require('mosca');
var mosca = require('@conduitvc/mosca');
var ascoltatore = require('./settings.js');

// var ascoltatore = {
//   //using ascoltatore
//   type: 'mongo',
//   url: 'mongodb://localhost:27017/mqtt',
//   pubsubCollection: 'ascoltatori',
//   mongo: {}
// };

var settings = {
    port: 1883,
    backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

server.on('subscribed', function (topic, client) {
    console.log('subscribed : ', topic);
});

server.on('unsubscribed', function (topic, client) {
    console.log('unsubscribed : ', topic);
});

server.on('clientDisconnecting', function (client) {
    console.log('clientDisconnecting : ', client.id);
});

server.on('clientDisconnected', function (client) {
    console.log('clientDisconnected : ', client.id);
});

// fired when a message is received
server.on('published', function (packet, client) {
    console.log('Published', packet.payload);
    // console.log('Client', client);
});

// fired when the mqtt server is ready
function setup() {
    console.log('Kafka Mosca server is up and running');
}

// // // Sending data from mosca to clients
// var message = {
//     topic: '/hello/world',
//     payload: 'abcde', // or a Buffer
//     qos: 0, // 0, 1, or 2
//     retain: false // or true
// };

server.on('ready', () => {
    setup();

    // setInterval(() => {
    //     server.publish(message, function () {
    //         console.log('done!');
    //     });
    // }, 10 * 1000);
});

server.on('error', (error) => {
    console.log("Error found:\n", error.stack);
});

module.exports = server;
