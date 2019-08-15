// let a = true
// if(a){
//     a = 456
//     let a;
// }

// {
//     var a = 1
//     var a = 2
// }
// {
//     let b = 1
//     let b = 2  //SyntaxError: Identifier 'b' has already been declared
// }

// var a = 0;
// let b = 1;
// //vscode a = undefined b=undefined
// //chrome a = 0 b=undefined
// console.log(`a = ${this.a} b=${this.b}`)

// let [a, b, c] = [1, 2, 3]
// let [你, 我, [她, 他]] = ['you', 'me', ['she', 'he']]
// let [one, , three] = [1, 2, 3]
// let [x,y] = ['x']
// let [m] = {}
// console.log(a,他,three,y); //1 'he' 3

// let test = {a:'a',b:"b",x:"x"}
// let {a,b,c} = test
// let {x:y} = test
// console.log(a);  //a 
// console.log(b);  //b
// console.log(c);  //undefine
// console.log(y);  //x

// let [a,b=2,c=5] = [1,2,undefined]
// let {x,y,z=4,m:n=5} = {x:"x",y:'y',m:undefined}
// console.log(a) //1
// console.log(b) //2
// console.log(c) //5
// console.log(x) //x
// console.log(y) //y 
// console.log(z) //4
// console.log(n) //5

// let a = new Proxy({},{
//     get:function(target,key,receiver){
//         let value = 15//Reflect.get(target,key,receiver)
//         console.log(`get ${key}`,value);
//         return value
//     },
//     set:function(target,key,value,receiver){
//         console.log('set key',key,value);
//         return Reflect.set(target,key,value,receiver)
//     }
// })
// a.name = 'js'  //set key name js
// a.name  // get name 15

const names = new Map()
class Person{
    constructor(name){
        names.set(this,name)
    }

    get name(){
        console.log('get this',this,this == apple);
        return names.get(this);
    }
}
let apple = new Person('apple')
console.log(apple.name);  //apple   get this Person {} true
let proxy = new Proxy(apple,{})
console.log(proxy.name);  //undefined  get this Person {} false
