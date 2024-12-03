"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name, addr) {
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    //memeber function
    Person.prototype.persondetails = function () {
        console.log("id:".concat(this.pid, " name:").concat(this.pname, " address:").concat(this.paddress));
    };
    return Person;
}());
exports.Person = Person;
