 export class Person{
    //data member
    pid:number;
    pname:string;
    paddress:string;
    constructor(id:number,name:string,addr:string){

        this.pid=id;
        this.pname=name;
        this.paddress=addr;
        

    }

    //memeber function
    persondetails(){
        console.log(`id:${this.pid} name:${this.pname} address:${this.paddress}`);
    }
}
