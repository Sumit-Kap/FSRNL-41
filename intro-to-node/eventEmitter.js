const EventEmitter = require("events");
const eventEmitter = require("events");

class Event extends EventEmitter {}
// Create a logger class that has all these event types like info, debug, verbose etc.
// winston and morgan
const event = new Event();
event.on("message", (data) => {
  console.log("The data is", data);
});

event.emit("info", "In the event emitter");
event.emit("debug", "In the event emitter");
event.emit("verbose", "In the event emitter");

eventEmitter.EventEmitter.emit;
