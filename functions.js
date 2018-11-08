if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
localStorage.setItem('myFirstKey', 'myFirstValue');
console.log(localStorage.getItem('myFirstKey'));

class Functions {




  static invert(string){
    return string.split("").reverse().join("");
  }

  static double(zahl){
    if(!isNaN(zahl))return zahl*2;
  }

  static square(zahl)
  {
      if(!isNaN(zahl))return zahl*zahl;
  }

  static date(){
    return Date();
  }

  static speichern(name,value){
    localStorage.setItem(name,value);
  }

  static lesen(text){
  return localStorage.getItem(text);

  }
}
module.exports = Functions;
