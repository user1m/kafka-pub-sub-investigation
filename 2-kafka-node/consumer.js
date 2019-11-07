// https://stackoverflow.com/a/37701524/3562407
// https://bertrandszoghy.wordpress.com/2017/06/27/nodejs-querying-messages-in-apache-kafka/
// https://stackoverflow.com/a/42579505/3562407 - consumergroups

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' }),
    consumer = new Consumer(
        client,
        [
            // { topic: 'hello', partition: 0 }
        ],
        {
            autoCommit: false,
            fromOffset: true
            // fromOffset: 'latest'
        });
// uuid = require('uuid-by-string');

consumer.on('message', function (message) {
    console.log(message);

    consumer.commit(function (err, data) {
        console.log('Committing...');
        // console.log(JSON.stringify(data, null, 2));
    });
});

consumer.addTopics([
    'hello'
    // { topic: 'hello', partition: 0, offset: 0 },
    // { topic: uuid('property-importer'), partition: 0, offset: 0 }
], () => console.log("topic added"));

consumer.on('error', function (err) {
    console.log('ERROR: ' + err.toString());
});
