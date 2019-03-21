var mqtt = require('mqtt')
var client2 = mqtt.connect('mqtt://localhost:1883', { clientId: 'testing1', clean: false })

client2.once('connect', function (connack) {
    console.log('connack.sessionPresent:', connack.sessionPresent);

    client2.on('message', function (topic, message) {
        console.log(topic.toString(), message.toString());
    });

    client2.subscribe('test1', { qos: 1 }, () => {
        client2.subscribe('test2', { qos: 1 }, () => {
            client2.subscribe('test3', { qos: 1 }, () => {
            });
        });
    });




});
