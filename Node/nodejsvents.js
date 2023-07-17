const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("please turn off the motor!");

  setTimeout(() => {
    console.log("please turn off the motor! gentle reminder");
  }, 3000);
});

console.log("script is running");
myEmitter.emit("WaterFull");
console.log("script is still running");
myEmitter.emit("WaterFull");


 

