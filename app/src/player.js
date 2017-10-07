'use strict';

function Player() {

}

Player.prototype.bowl = function(value, frame, scorecard) {
  scorecard.bowl(value, frame);
};
