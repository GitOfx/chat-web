# [ES6 语法](http://es6.ruanyifeng.com/)

指5.1版本之后的javascript的下一代标准，涵盖ES2015，ES2016,ES2017等,每年都有新特性加入，如es2019的catch中可以不写error捕获，兼容性可有babel-polyfill这些工具抹平

## let和const命令

1. let只在代码块有效，跟var作用域不同，代码块可以是{}，也可以是for循环,不同代码块的变量互相独立
    ```js
    let a = 1
    if(a == 1){
        let a = 2
        console.log("inner a",a) //2
    }
    console.log("out a",a) //1
    ```
2. 必须先声明再使用否则报错，var不会报错 
3. 暂时性死区，只要块级作用域内存在let命令，这块代码只认这一个命令，无视外部同名变量
    ```js
    let a = true
    if(a){
        a = 456  //ReferenceError: a is not defined
        let a;
    }
    ```
4. let同代码块内不同重复声明相同变量，var可以
    ```js
        {
            var a = 1
            var a = 2
        }
        {
            let b = 1
            let b = 2  //SyntaxError: Identifier 'b' has already been declared
        }
    ```
5. const与let不同的是声明后不能修改地址，哪里声明就哪里初始化赋值
6. const和let声明的变量不属于全局变量，var和function变量依旧是顶层全局对象属性
    ```js
    var a = 0;
    let b = 1;
    //vscode a = undefined b=undefined
    //chrome a = 0 b=undefined
    console.log(`a = ${this.a} b=${this.b}`)
    ```

## 变量的解构赋值
ES6按照一定的模式，从数组和对象中提取值，对变量进行赋值
1. 只要等号两边模式相同，左边的变量就会被赋予对应的值,可以层层对应，取不到的undefined
    ```js
    let [a, b, c] = [1, 2, 3]
    let [你, 我, [她, 他]] = ['you', 'me', ['she', 'he']]
    let [one, , three] = [1, 2, 3]
    let [x,y] = ['x']
    console.log(a,他,three,y); //1 'he' 3 undefined
    ```
2. 只有右边是可遍历的时候才好用 
    ```js
    let [m] = {} // TypeError: {} is not iterable
    ```
3. 对象的结构按同名字段取值，不同名字的也要先对应出属性名
    ```js
    let test = {a:'a',b:"b",x:"x"}
    let {a,b,c} = test
    let {x:y} = test
    console.log(a);  //a 
    console.log(b);  //b
    console.log(c);  //undefine
    console.log(y);  //x
    ```
4. 结构的默认值，右边取值严格为undefined时默认值才生效
    ```js
    let [a,b=2,c=5] = [1,2,undefined]
    let {x,y,z=4,m:n=5} = {x:"x",y:'y',m:undefined}
    console.log(a) //1
    console.log(b) //2
    console.log(c) //5
    console.log(x) //x
    console.log(y) //y 
    console.log(z) //4
    console.log(n) //5
    ```
##  [Proxy 代理](http://es6.ruanyifeng.com/#docs/proxy)
1. Proxy 用于修改某些操作默认行为，等同于在语言层面作出修改，代理操作
    ```js
    let a = new Proxy({},{
    get:function(target,key,receiver){
        let value = 15//Reflect.get(target,key,receiver)
        console.log(`get ${key}`,value);
        return value
    },
    set:function(target,key,value,receiver){
        console.log('set key',key,value);
        return Reflect.set(target,key,value,receiver)
    }
    })
    a.name = 'js'  //set key name js
    a.name  // get name 15
    ```
2. 下面是 Proxy 支持的拦截操作一览，一共 13 种。

   1. get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
   2. set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
   3. has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
   4. deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
    5. ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
    6. getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
    7. defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
    8. preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
    9. getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
    10. isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
    11. setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
    12. apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    13. construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

3. 代理this问题 目标内部的this关键字会会指向proxy 
    ```js
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
    ```
## Reflect