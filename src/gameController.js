var gameController = {
    round: 0,
    maxRound: 6,
    targetNumber: "",

    beginGame: function () {
        this.round++;
        this.targetNumber = makeRandom.makeRandom();
    },
    endGame: function () {
        this.round = 0;
        this.targetNumber = "";
    },

    gameController: function (userInput) {
        var result = "";

        if (this.round == 0) {
            this.beginGame();
        }

        if (this.round < this.maxRound) {
            if (validateUserInput.validateUserInput(userInput)) {
                result = judgeUserInput.judgeUserInput(this.targetNumber, userInput);
                if (result == "4A0B") {
                    result = "congratulations";
                } else {
                    this.round++;
                }
            } else {
                result = "error input";
            }
        }
        else {
            result = "game over";
            this.endGame();
        }
        return result;
    }
}