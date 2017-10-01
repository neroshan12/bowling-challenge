describe("Scorecard", function() {
  describe("new game", function() {

    beforeEach(function() {
      player = new Player();
      scorecard = new Scorecard();
    });

    describe ("#score", function() {
      it("returns the player's score", function() {
        expect(scorecard.score()).toEqual(0);
      });
    });

    describe("#bowl", function () {
      it("adds to the player's score", function() {
        player.bowl(1, scorecard);
        expect(scorecard.score()).toEqual(1);
      });
    });
  });
});
