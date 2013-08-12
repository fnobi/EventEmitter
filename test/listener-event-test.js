var expect = chai.expect;

describe('EventEmitter', function () {
    it('emit event on new listener', function (done) {
        var hoge = new EventEmitter(),
            listener = function () {
                console.log('tick!');
            };

        hoge.on('newListener', function (type, fn) {
            if (type != 'tick') {
                return;
            }

            expect(type).to.be.equal('tick');
            expect(fn).to.be.equal(listener);
            done();
        });

        hoge.on('tick', listener);
    });

    it('emit event on remove listener', function (done) {
        var hoge = new EventEmitter(),
            listener = function () {
                console.log('tick!');
            };

        hoge.on('removeListener', function (type, fn) {
            expect(type).to.be.equal('tick');
            expect(fn).to.be.equal(listener);
            done();
        });

        hoge.on('tick', listener);
        hoge.removeListener('tick', listener);
    });
});