// var mosca = require('mosca'); //works
var mosca = require('@conduitvc/mosca'); //fails
var mongoUrl = 'mongodb://localhost:27017/mqtt';
var ascoltatore = {
    //using ascoltatore
    type: 'mongo',
    url: mongoUrl,
    pubsubCollection: 'ascoltatori',
    mongo: {}
};

var settings = {
    port: 1883,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: mongoUrl,
    },
    backend: ascoltatore
};
var server = new mosca.Server(settings);
server.on('ready', setup);

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function (packet, client) {
    console.log('Published', packet.payload);
    if (client !== undefined && client !== null) {
        console.log("\tclient", client.id);
    }
});
// fired when the mqtt server is ready
function setup() {
    console.log('Mongo Mosca server is up and running')
}