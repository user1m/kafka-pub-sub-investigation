var KafkaAdapter = require('strong-pubsub-kafka');
var kafkaNode = require('kafka-node');

const client = new kafkaNode.KafkaClient({
    // kafkaHost: 'localhost:9092',
    // clientId: "client1",
    topics: ["hello-world"],
    id: "client1",
    host: "localhost",
    port: 9092
});

var adapter = new KafkaAdapter(client);

adapter.connect(() => {
    if (adapter.isConnected) {
        console.log("Connected!");

        // adapter.createTopics()
        setInterval(() => {
            adapter.publish('hello-world',
                `${new Date().toISOString()}`,
                { qos: 2, retain: true },
                (error, data) => {
                    if (error) console.log(JSON.stringify(error.stack, null, 2));
                    if (data) console.log(JSON.stringify(data, null, 2));
                });
        }, 10 * 1000);
    }
});

