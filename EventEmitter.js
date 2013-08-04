var EventEmitter = new Function ();

EventEmitter.prototype.initEventEmitter = function () {
    this._listeners = {};
};

EventEmitter.prototype.initEventEmitterType = function (type) {
    if (!type) {
        return;
    }
    this._listeners[type] = [];
};

EventEmitter.prototype.hasEventListener = function (type, fn) {
    if (!this.listener) {
        return false;
    }

    if (type && !this.listener[type]) {
        return false;
    }

    return true;
};

EventEmitter.prototype.addListener = function (type, fn) {
    if (!this._listeners) {
        this.initEventEmitter();
    }
    if (!this._listeners[type]) {
        this.initEventEmitterType(type);
    }
    this._listeners[type].push(fn);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, fn) {
    if (!this._listeners) {
        this.initEventEmitter();
    }
    if (!this._listeners[type]) {
        this.initEventEmitterType(type);
    }

    var self = this;
    this._listeners[type].push(function () {
        fn.apply(self, arguments);
        self.removeListener(type, fn);
    });
};

EventEmitter.prototype.removeListener = function (type, fn) {
    if (!this._listeners) {
        return;
    }
    if (!this._listeners[type]) {
        return;
    }
    if (!this._listeners[type].forEach) {
        return;
    }

    if (!type) {
        this.initEventEmitter();
        return;
    }
    if (!fn) {
        this.initEventEmitterType(type);
        return;
    }
};

EventEmitter.prototype.emit = function (type) {
    if (!this._listeners) {
        return;
    }
    if (!this._listeners[type]) {
        return;
    }
    if (!this._listeners[type].forEach) {
        return;
    }

    var self = this,
        args = [].slice.call(arguments, 1);

    this._listeners[type].forEach(function (listener) {
        listener.apply(self, args);
    });
};

EventEmitter.prototype.listeners = function (type) {
    if (!type) {
        return undefined;
    }
    return this._listeners[type];
};

// jquery style alias
EventEmitter.prototype.trigger = EventEmitter.prototype.emit;
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;