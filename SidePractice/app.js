

let emitter = require('./emitter');
let Sahas = new emitter();


Sahas.on("greetings", function(){
  console.log("Hello there, my name is Sahas and this is just for practice. I'm gonna show up again in just a while.");
});

Sahas.on("greetings2", function(){
  console.log("Hi, I just got emitted");
  Sahas.emit("greetings");

});

Sahas.emit("greetings2");
Sahas.emit("greetings");
