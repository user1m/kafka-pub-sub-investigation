var mqtt = require('mqtt');

var client = mqtt.connect({
    servers: [{ host: 'localhost', port: 1883 }],
    clientId: "User1",
    clean: false
});

client.subscribe('/hello/world');

client.on('message', function (topic, message) {
    // this is never fired when offline options (QoS, clientId, clean)
    // are configured in subscribe.js
    console.log('Listener Client: Message Received = ', message.toString());
});

// setTimeout(function () {
//     console.log('Listener Client: Exiting');
//     client.end();
// }, 20 * 1000);