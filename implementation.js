"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization = /** @class */ (function () {
    function Organization(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    Organization.prototype.emplopyeeDetails = function () {
        return "id:".concat(this.empId, " name:").concat(this.empName, " contact:").concat(this.empContact);
    };
    return Organization;
}());
var orgniobj = new Organization(501, "prasath", 23234);
console.log(orgniobj.emplopyeeDetails());
