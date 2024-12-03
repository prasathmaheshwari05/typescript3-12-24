import IEmployee from "./interface";
 class Organization implements IEmployee{
    empId:number;
    empName:string;
    empContact:number;

    constructor(id:number,name:string,contact:number){

        this.empId=id;
        this.empName=name;
        this.empContact=contact;
    }
    emplopyeeDetails(): string {
        return `id:${this.empId} name:${this.empName} contact:${this.empContact}`
    }
 }
 let orgniobj =new Organization (501,"prasath",23234);
 console.log(orgniobj.emplopyeeDetails());