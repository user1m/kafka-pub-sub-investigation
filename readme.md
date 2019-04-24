## Kafka Pub Sub investigation


### [View My Investigation Notes](https://docs.google.com/document/d/1bZTmptNwvpv9Y_OMYtILUUnGrD8rsJ3rvbO0nA9bRDA/edit?usp=sharing)

## Requirements
* [kafka](https://github.com/wurstmeister/kafka-docker)
* mongo (optional - but needed to test [mosca-server-persistance.js](https://github.com/User1m/kafka-pub-sub-investigation/blob/master/1-ascoltatori/mosca-server-persistance.js))

## Repo/Folder structure


#### [mqtt-sample](https://github.com/mqttjs/MQTT.js)

* demo [mqtt](https://github.com/mqttjs/MQTT.js) clients to get comfortbale w/ mqtt

#### [ascoltatori](https://github.com/mcollina/ascoltatori)

* demo ascoltatori clients to implement PubSub - ran into many issues due to libs being outdates...[check my notes for more info](https://docs.google.com/document/d/1bZTmptNwvpv9Y_OMYtILUUnGrD8rsJ3rvbO0nA9bRDA/edit?usp=sharing)

#### [kafka-node](https://github.com/SOHU-Co/kafka-node)

* final an working of pub sub using kafka-node
* supported:
	* offline persistence or way to retrieve messages from last check
	* auth
	* speed/Qos


