describe("Bowling game", function() {
  beforeEach(function() {
    player = new Player();
    scorecard = new Scorecard();
    game = new Game();
  });

  describe("ScoreCard", function(){
    describe("#score", function(){
      it("returns the player's score", function(){
        expect(scorecard.score()).toEqual(0);
      });
    });

    describe("#bowl", function(){
      it("adds the value to the score", function(){
        player.bowl(1, game.getFrame(scorecard), scorecard);
        expect(scorecard.score()).toEqual(1);
      });
      it("doesn't allow the frame total to go above 10", function(){
        player.bowl(9, game.getFrame(scorecard), scorecard);
        expect(function() {
          player.bowl(9, game.getFrame(scorecard), scorecard);
        }).toThrow(new Error("Frame score cannot be higher than 10!"));
      });
    });
  });

  describe("Game", function(){
    describe("#frame", function(){
      it("starts the game on frame 1", function(){
        expect(game.getFrame(scorecard)).toEqual(1);
      });
    });
    describe("#calculateframescore", function(){
      it("calculates the frame", function(){
        player.bowl(10, game.getFrame(scorecard), scorecard);
        player.bowl(5, game.getFrame(scorecard), scorecard);
        player.bowl(5, game.getFrame(scorecard), scorecard);
        player.bowl(3, game.getFrame(scorecard), scorecard);
        player.bowl(3, game.getFrame(scorecard), scorecard);
        expect(game.getFrame(scorecard)).toEqual(4);
      });
    });
  });
});
