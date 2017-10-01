function Scorecard() {
  this._score = 0;
}

Scorecard.prototype.score = function() {
  return this._score;
};

Scorecard.prototype.bowl = function(value) {
  this._score += value;
};
