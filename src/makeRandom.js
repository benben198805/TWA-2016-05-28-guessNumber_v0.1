var makeRandom = {
    checkRepeat: function (randomNumber) {
        for (var index = 0; index < 4; index++) {
            for (var target = index + 1; target < 4; target++) {
                if (randomNumber[index] == randomNumber[target]) {
                    return false;
                }
            }
        }
        return true;
    },
    makeRandom: function () {
        var randomNumber = Math.round(Math.random() * 10000).toString();
        while (!this.checkRepeat(randomNumber)||randomNumber.length!=4) {
            randomNumber = Math.round(Math.random() * 10000).toString();
        }
        return randomNumber;
    }

}