var ascoltatori = require('ascoltatori');
var settings = {
    type: 'kafka',
    json: false,
    kafka: require("kafka-node"),
    connectionString: "localhost:2181",
    clientId: "ascoltatori",
    groupId: "ascoltatori",
    defaultEncoding: "utf8",
    encodings: {
        image: "buffer"
    }
};

ascoltatori.build(settings, function (err, ascoltatore) {
    // ...
});