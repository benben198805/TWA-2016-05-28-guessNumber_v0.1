describe('guessNumber', function () {
    describe('checkRepeat', function () {
        it('when given a no repaeted numeber should return true', function () {
            var result = makeRandom.checkRepeat("1234");
            var expectResult = true;
            expect(result).toBe(expectResult);
        });
        it('when given a repaeted numeber should return false', function () {
            var result = makeRandom.checkRepeat("1134");
            var expectResult = false;
            expect(result).toBe(expectResult);
        });
    });
    
    describe('makeRandom', function () {
        it('when call makeRandom should return number', function () {
            var result = makeRandom.makeRandom();
            expect(parseInt(result)).toEqual(jasmine.any(Number));
        });
        it('when call makeRandom should return 4 length result', function () {
            var result = makeRandom.makeRandom();
            expect(result.length).toBe(4);
        });
    });
    
    describe('checkIsNumber', function () {
        it('when call validateUserInput with 1234 should return true', function () {
            var result = validateUserInput.checkIsNumber("1234");
            expect(result).toEqual(true);
        });
        it('when call validateUserInput width 123a should return false', function () {
            var result = validateUserInput.checkIsNumber("123a");
            expect(result).toEqual(false);
        });
    });
    
    describe('validateUserInput', function () {
        it('when call validateUserInput with right number return true', function () {
            var result = validateUserInput.validateUserInput("1234");
            expect(result).toEqual(true);
        });
        it('when call validateUserInput with wrong input should false', function () {
            var result = validateUserInput.validateUserInput("123a");
            expect(result).toEqual(false);
        });
        it('when call validateUserInput with 3 length number return false', function () {
            var result = validateUserInput.validateUserInput("123");
            expect(result).toEqual(false);
        });
        it('when call validateUserInput with repaeated number return false', function () {
            var result = validateUserInput.validateUserInput("1123");
            expect(result).toEqual(false);
        });
    });
    
    describe('judgeUserInput', function () {
        it('when call judgeUserInput with 1234 to compare 1234 number return 4A0B', function () {
            var result = judgeUserInput.judgeUserInput("1234","1234");
            expect(result).toEqual("4A0B");
        });
        it('when call judgeUserInput with 4321 to compare 1234 number return 0A4B', function () {
            var result = judgeUserInput.judgeUserInput("1234","4321");
            expect(result).toEqual("0A4B");
        });
        it('when call judgeUserInput with 1234 to compare 5678 number return 0A0B', function () {
            var result = judgeUserInput.judgeUserInput("1234","5678");
            expect(result).toEqual("0A0B");
        });
        it('when call judgeUserInput with 1243 to compare 1234 number return 2A2B', function () {
            var result = judgeUserInput.judgeUserInput("1234","1243");
            expect(result).toEqual("2A2B");
        });
    });
    
    describe('beginGame', function () {
        it('when call beginGame set round and targetNumber', function () {
            spyOn(makeRandom,'makeRandom').and.returnValue("1234");
            gameController.beginGame();
            expect(gameController.round).toEqual(1);
            expect(gameController.targetNumber).toEqual("1234");
        });
    });
    
    
    describe('endGame', function () {
        it('when call endGame set round and targetNumber', function () {
            gameController.endGame();
            expect(gameController.round).toEqual(0);
            expect(gameController.targetNumber).toEqual("");
        });
    });
    
    describe('gameController', function () {
        it('when call gameController with error input then round stay', function () {
            spyOn(makeRandom,'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue(false);
            var result=gameController.gameController("123a");
            expect(gameController.round).toEqual(1);
            expect(gameController.targetNumber).toEqual("1234");
            expect(result).toEqual("error input");
        });
        it('when call gameController with right input at first time then reture congratulations', function () {
            spyOn(makeRandom,'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("4A0B");
            var result=gameController.gameController("1234");
            expect(result).toEqual("congratulations");
        });
        it('when call gameController with right input at second time then reture congratulations', function () {
            spyOn(makeRandom,'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("0A0B").and.returnValue("4A0B");
            gameController.gameController("5678");
            var result=gameController.gameController("1234");
            expect(result).toEqual("congratulations");
        });
        it('when call gameController with right input at sixth time then reture congratulations', function () {
            spyOn(makeRandom,'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("4A0B");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            var result=gameController.gameController("1234");
            expect(result).toEqual("congratulations");
        });
        
        it('when call gameController with right input at sixth time then reture congratulations', function () {
            spyOn(makeRandom,'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput,'judgeUserInput').and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B").and.returnValue("0A0B");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            var result=gameController.gameController("5678");
            expect(result).toEqual("game over");
        });
    });
});
