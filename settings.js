module.exports = {
    type: 'kafka',
    json: false,
    kafka: require("kafka-node"),
    connectionString: "localhost:2181", //"localhost:9092",//
    fromOffset: "latest",
    clientId: "ascoltatori",
    groupId: "ascoltatori",
    defaultEncoding: "utf8",
    encodings: {
        image: "buffer"
    }
};