var mqtt = require('mqtt');

var client = mqtt.connect({
    servers: [{ host: 'localhost', port: 1883 }],
    clientId: "User1",
    clean: false
});

client.subscribe('/hello/world', { qos: 1 }, () => {
    console.log("Subscriber Client: subscribed and closing connection.");
    client.end();
});

