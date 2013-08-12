var expect = chai.expect;

describe('EventEmitter', function () {
    it('is set listener', function (done) {
        var hoge = new EventEmitter();
        hoge.on('tick', function () {
            expect(true).to.be.true;
            done();
        });

        hoge.emit('tick');
    });

    it('pass event with arguments', function (done) {
        var hoge = new EventEmitter();
        hoge.on('tick', function (arg1, arg2) {
            expect(arg1).to.be.equal(3);
            expect(arg2).to.be.equal(5);
            done();
        });

        hoge.emit('tick', 3, 5);
    });
});