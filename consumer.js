// https://github.com/mcollina/mosca/issues/753#issuecomment-397791850

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883', {
    clean: false,
    clientId: "consumer",
    // outgoingStore: new mqtt.Store()
});

client.on('connect', () => {
    client.subscribe({ "/hello/world": 1 }, (err, granted) => {
        if (err) console.log("Error on Subscribe", err);
        if (granted) {
            console.log('consumer connected');
            console.log(JSON.stringify(granted, null, 2));
        }
    });

    // client.publish('/hello/world', 'Hello mqtt', { qos: 2 });
});

client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));
    // client.end();
    // const id = client.getLastMessageId();
    // console.log(id);
    // client.removeOutgoingMessage(id);

    // mqtt.Store().del(payload, () => {
    //     console.log("Deleted", payload);
    // });

});

client.on('error', (error) => {
    console.log(error.stack);
});

