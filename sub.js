var ascoltatori = require('ascoltatori');
var settings = require('./settings.js');

ascoltatori.build(settings, function (err, ascoltatore) {

    // subscribes to a topic
    ascoltatore.subscribe('hello', function () {
        console.log(arguments);
        // { '0': 'hello', '1': 'a message' }
    });
});