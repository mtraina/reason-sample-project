// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");

function speak(animal) {
  if (animal.tag) {
    return animal[0] + " says: woof";
  } else {
    return animal[0] + " says: meow";
  }
}

console.log(speak(/* Dog */Block.__(1, ["Cooper"])));

console.log(speak(/* Cat */Block.__(0, ["Buddy"])));

exports.speak = speak;
/*  Not a pure module */