"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, height) {
        if (name === void 0) { name = 'meitar'; }
        if (age === void 0) { age = 2; }
        if (height === void 0) { height = 2.1; }
        this.age = age;
        this.name = name;
        this.height = height;
    }
    return Person;
}());
exports.Person = Person;
