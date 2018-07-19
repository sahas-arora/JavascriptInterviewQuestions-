


let Emitter = require('./emitter');



let Sahas = new Emitter();


Sahas.on("greetings", function(){
  console.log("Hey there, I just ran this function ");
  Sahas.emit("greet");
});

Sahas.on("greet", function(){
  console.log("Hi I just got emitted");
});

Sahas.emit("greetings");
