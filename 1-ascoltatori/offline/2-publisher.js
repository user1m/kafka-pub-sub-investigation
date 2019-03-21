var mqtt = require('mqtt');

var client = mqtt.connect({
    servers: [{ host: 'localhost', port: 1883 }],
    clientId: "TxUser",
    clean: false
});

client.on('connect', function () {
    client.publish('/hello/world', '* * * IMPORTANT msg ' + Date() + ' * * *', { qos: 1, retain: true }, () => {
        client.end(false, function () {
            console.log('Sender Client: published message and closed connection');
        });
    });
});