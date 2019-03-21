var ascoltatori = require('ascoltatori');
var settings = require('./settings.js');

ascoltatori.build(settings, function (err, ascoltatore) {
    // publishes a message to the topic 'hello'
    ascoltatore.publish('hello', 'a message', function () {
        console.log('message published');
        process.exit(1);
    });
});