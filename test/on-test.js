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
});