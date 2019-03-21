// https://github.com/mcollina/mosca/issues/753#issuecomment-397791850

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883', {
    clean: false,
    clientId: "producer"
});

// var message = {
//     topic: '/hello/world',
//     payload: 'abcde', // or a Buffer
//     qos: 0, // 0, 1, or 2
//     retain: false // or true
// };

client.on('connect', () => {
    // client.publish(message, function () {
    //     console.log('done!');
    // });
    console.log('producer connected');
    setInterval(() => {
        // client.publish('/hello/world', `Hello mqtt ${new Date().toISOString()}`, (a, b) => {
        //     console.log("done");
        //     console.log("a", a);
        //     console.log("b", b);
        // });
        client.publish('/hello/world', `Hello mqtt ${new Date().toISOString()}`, { qos: 1, retain: true },
            // { qos: 2, retain: false },
            (err, data) => {
                console.log("done");
                if (err) console.log(err.stack);
                if (data) console.log(JSON.stringify(data, null, 2));
            });
    }, 5 * 1000);
});

// client.on("message", (topic, payload) => {
//     console.log([topic, payload].join(": "));
//     // client.end();
// });

client.on('close', () => {
    console.log('client disconnected');
});

client.on('error', (error) => {
    console.log(error.stack);
});
