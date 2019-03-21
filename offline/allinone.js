var mqtt = require('mqtt')

var client1 = mqtt.connect('mqtt://localhost:1883', { clientId: 'testing', clean: false });

client1.on('connect', function (connack) {
    console.log('connack.sessionPresent:', connack.sessionPresent)

    client1.subscribe('test1', { qos: 1 }, function (error, granted) {
        if (error) {
            return console.error;
        }
        console.log('subscribed test1!', granted)

        client1.subscribe('test2', { qos: 1 }, function (error, granted) {
            if (error) {
                return console.error;
            }
            console.log('subscribed test2!', granted)

            client1.subscribe('test3', { qos: 1 }, function (error, granted) {
                if (error) {
                    return console.error;
                }
                console.log('subscribed test3!', granted)

                client1.publish('test1', 'value1', { qos: 1, retain: true }, function () {
                    client1.publish('test2', 'value2', { qos: 1, retain: true }, function () {
                        client1.publish('test3', 'value3', { qos: 1, retain: true }, function () {

                            client1.end(function () {
                                // var client2 = mqtt.connect('mqtt://localhost:1883', { clientId: 'testing', clean: false })

                                // client2.once('connect', function (connack) {
                                //     console.log('connack.sessionPresent:', connack.sessionPresent);

                                //     client2.subscribe('test1', { qos: 1 });
                                //     // client2.subscribe('test2', { qos: 1 });
                                //     // client2.subscribe('test3', { qos: 1 });

                                //     client2.on('message', function (topic, message) {
                                //         console.log(topic.toString(), message.toString());
                                //     });
                                // });


                            });
                        });
                    });
                });
            });
        });
    });
});