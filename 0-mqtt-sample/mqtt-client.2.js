// http://mcollina.github.io/mqtt_and_nodejs/#21
// https://www.npmjs.com/package/mqtt#example

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org', {
    clientId: "moscaslides",
    clean: false
});

//1. Run then comment out
// client.subscribe("mqtt/offline", { qos: 1 },
//     function () {
//         console.log("subscribe done!");
//         // called when the subscribe is successful
//         client.end();
//     });

//2. Run then comment out
// client.publish("mqtt/offline", "hello world!", { qos: 1 },
//     function () {
//         console.log("publish done!");
//         client.end();
//     });

//3. Finally, run to get offline message
client.on("message", function (topic, payload) {
    console.log([topic, payload.toString()].join(": "));
    setTimeout(client.end.bind(client), 1000);
});