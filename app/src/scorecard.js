'use strict';

function Scorecard() {
  this._totalscore = 0;
  this._framescores = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[]
   };
}

Scorecard.prototype.score = function() {
  return this._totalscore;
};

Scorecard.prototype.bowl = function(value, frame) {
   var frameTotal = this._framescores[frame].reduce(sum, 0);
   if(frameTotal + value > 10) {
     throw new Error("Frame score cannot be higher than 10!");
   } else {
     this._framescores[frame].push(value);
     this._totalscore += value;
   }
 };

function sum(a, b) {
  return a + b;
}
