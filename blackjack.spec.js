describe('Tests for the Blackjack Game', function () {
    const ace = { val: 11, displayVal: 'Ace', suit: 'hearts' };
    const two = { val: 2, displayVal: '2', suit: 'hearts' };
    const three = { val: 3, displayVal: '3', suit: 'hearts' };
    const four = { val: 4, displayVal: '4', suit: 'hearts' };
    const five = { val: 5, displayVal: '5', suit: 'hearts' };
    const six = { val: 6, displayVal: '6', suit: 'hearts' };
    const seven = { val: 7, displayVal: '7', suit: 'hearts' };
    const eight = { val: 8, displayVal: '8', suit: 'hearts' };
    const nine = { val: 9, displayVal: '9', suit: 'hearts' };
    const ten = { val: 10, displayVal: '10', suit: 'hearts' };

    describe('dealerShouldDraw function', function () {
        it('Dealer should stay on 19', function () {
            expect(dealerShouldDraw([ten, nine])).toEqual(false);
        });

        it('Dealer should draw on soft 17', function () {
            expect(dealerShouldDraw([ace, six])).toEqual(true);
        });

        it('Dealer should stay on normal 17', function () {
            expect(dealerShouldDraw([ten, six, ace])).toEqual(false);
        });

        it('Dealer should stay on 13', function () {
            expect(dealerShouldDraw([two, four, two, five])).toEqual(true);
        });

    });
});