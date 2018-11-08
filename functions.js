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

  static speichern(text){
    localStorage.setItem('test',text);
  }

  static lesen(text){
  return localStorage.getItem(test);

  }
}
module.exports = Functions;
