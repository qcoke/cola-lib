/**
 * Created by Roy on 15/9/23.
 */

var censor = require("censorify");
console.log(censor.getCensoreWord());
console.log(censor.censor("Some very sad,bad and mad text."));
censor.addCensoreWord("gloomy");
console.log(censor.getCensoreWord());
console.log(censor.censor("A very gloomy day."))