var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' }),
    producer = new Producer(client),
    // km = new KeyedMessage('key', 'message'),
    payloads = [
        // { topic: 'bertrandszoghytopic', messages: 'fifth color is green', partition: 0 }
    ],
    uuid = require('uuid-by-string'),
    accountID = uuid("account-service");

producer.on('ready', function () {
    setInterval(() => {
        producer.send([
            { topic: 'hello', messages: `The time is: ${new Date().toISOString()}`, partition: 0, key: accountID },
            // { topic: uuid('property-importer'), messages: `The time is: ${new Date().toISOString()}`, partition: 0, key: accountID }
        ], function (err, data) {
            console.log(data);
            // process.exit(0);
        });
    }, 10 * 1000);
});

producer.on('error', function (err) {
    console.log('ERROR: ' + err.toString());
});