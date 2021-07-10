let title:string = "kkb";
let n:number = 1;
let b:boolean = true;

let a : null;
let c : undefined;

let d;  //any

//undefined and null is the subtype of other type;

let ele = document.querySelector("div");
if(ele)
ele.style.display = "none";

///object type
let obj: Object = {};
let arr:Array<number> =[1,2,3];
let obj1: Person = {
    username:"yyz",
    age:2,
    
}
interface Person {
    username:string,
    age:number
}

class P1 {
    constructor(public username:string,
        public age:number){}
}
let user:P1 = new P1("lj",30)