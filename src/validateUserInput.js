var validateUserInput = {
    checkIsNumber: function (userInput) {
        var result=true;
        for (var index = 0; index < userInput.length; index++) {
            result=result&&!isNaN(parseInt(userInput[index]));
        }
        return result;
    },
    validateUserInput: function (userInput) {
        var isFourLength=userInput.length==4;
        var isNotRepeatNumber=makeRandom.checkRepeat(userInput);
        var isNumber=this.checkIsNumber(userInput);
        return isFourLength&&isNotRepeatNumber&&isNumber;
    }

}