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
var users = {
    name: 'shangy',
    age: 10,
    address: 'sdfghjk',
    getName: function () {
        return 'mangal';
    }
};
users.age = 18;
console.log(users);
console.log(users.getName());
//union types
var s = 'hello';
s = 30;
s = true;
s = 'dhangy';
console.log(s);
// functions
// #1
function cal() {
    return 10 + 20;
}
console.log(cal());
// #2
function cals(a) {
    return a;
}
console.log(cals('wow'));
// #3
function calc() {
    return 100;
}
console.log();
// #4         optional parameter
function calt(j, k) {
    return k ? j + k : j;
}
console.log(calt(100));
// class in typescirpt
var dot = /** @class */ (function () {
    function dot(name) {
        this.name = 'mangal';
        this.name = name;
    }
    dot.prototype.get_name = function () {
        return this.name;
    };
    return dot;
}());
var d1 = new dot('shangy');
console.log(d1.get_name());
