"use strict";
exports.__esModule = true;
var a = 'lets gooooo';
console.log(a);
var app = /** @class */ (function () {
    function app() {
    }
    app.prototype.test = function () {
        console.log('hello shangy');
    };
    app.prototype.num = function () {
        var n = 7;
        console.log(n);
    };
    app.prototype.str = function () {
        var s = 'shangy';
        console.log(s);
    };
    app.prototype.bool = function () {
        var bl = true;
        console.log(bl);
    };
    return app;
}());
var b = new app;
b.test();
b.num();
b.str();
b.bool();
var day = /** @class */ (function () {
    function day() {
    }
    day.prototype.test1 = function () {
        var data = ['one', 'two'];
        data.push('three');
        console.log(data);
    };
    return day;
}());
var c = new day;
c.test1();
