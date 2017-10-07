describe("Bowling", function() {
  beforeEach(function() {
    player = new Player();
    scorecard = new Scorecard();
    game = new Game();
    frame = 0;
  });

  describe("ScoreCard", function() {
    describe("#score", function() {
      it("returns the player's score at that time", function() {
        expect(scorecard.score()).toEqual(0);
      });
    });

    describe("#bowl", function() {
      it("adds the argument to the score", function() {
        player.bowl(1, game.frame(), scorecard);
        expect(scorecard.score()).toEqual(1);
      });
      it("doesn't allow the frame total to go above 10", function() {
        player.bowl(5, game.frame(), scorecard);
        expect(function() {
          player.bowl(6, game.frame(), scorecard);
        }).toThrow(new Error("Frame score cannot be higher than 10!"));
      });
    });
  });

  describe("Game", function() {
    describe("#frame", function() {
      it("starts the game on frame 1", function() {
        expect(game.frame()).toEqual(1);
      });
    });
  });
});
