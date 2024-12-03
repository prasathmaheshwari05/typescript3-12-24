import {Person} from "./inheritance";
class Company extends Person {
    cname:string;
    empcontact:number;
    emppost:string;

    constructor(id:number,name:string,addr:string,compname:string,econtact:number,epost:string){
        super(id,name,addr);
        this.cname=compname;
        this.empcontact=econtact;
        this.emppost=epost;
    }

    persondetails(){
        console.log(`empid:${this.pid} empname:${this.pname} post:${this.emppost} company:${this.cname} address:${this.paddress} contact:${this.empcontact}`);

    }


}
let componj=new Company(201,"dhanush","chennai","changepond",88888,"fullstack");
componj.persondetails();