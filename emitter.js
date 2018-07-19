



function Emitter () {
  this.events = [] ;
}

Emitter.prototype.on = function(type,listener) {
  this.events[type] = this.events[type] || [] ;
  this.events[type].push(listener);
}


let func = async function(type){
  if(this.events[type]){
    this.events[type].forEach(function(listener){
      listener();
    });
  }
}
Emitter.prototype.emit = func;
module.exports = Emitter ;
