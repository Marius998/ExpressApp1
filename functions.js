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
}
module.exports = Functions;
