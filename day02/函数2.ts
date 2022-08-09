// 构造函数
// TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
// 形式：var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
// arg1，arg2...参数列表
// functionBody 一个含有包括函数定义的javascript语句的字符串

// 例如：
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

// 递归函数 函数内部再调用函数本身则为递归函数
// 例如计算某个数的阶乘 n*(n-1)*(n-2)*...*1
function factorial1(number){
    if(number<=0){
        return 1;
    }else{
        return(number*factorial1(number-1));
    }
}
console.log(factorial1(6));//720

// Lambda函数 也称之为箭头函数
// ( [param1, parma2,…param n] )=>statement;
// 例如1：
var foo = (x:number)=>10 + x ;
console.log(foo(100))      //输出结果为 110

// 例如2：
var foo2 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
} 
foo2(100)

// 例如3； 如果只有一个参数 ()为可选
var display = x => { 
    console.log("输出为 "+x) 
} 
display(12)

// 例如4：无参数时
var disp =()=> { 
    console.log("Function invoked"); 
} 
disp();

// 函数重载 函数重载是函数的方法名相同而参数不同，返回类型可以相同也可以不相同
// 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

// 参数类型不同
// function disp(string):void; 
// function disp(number):void;

// 参数数量不同
// function disp(n1:number):void; 
// function disp(x:number,y:number):void;

// 如果参数类型不同，则参数类型应设置为 any。
// 参数数量不同你可以将不同的参数设置为可选。
// 定义函数重载需要定义重载签名和一个实现签名。

// 定义重载签名
// function disp(s1:string):void; 
// function disp(n1:number,s1:string):void; 
 

// 定义实现签名
// function disp(x:any,y?:any):void { 
//     console.log(x); 
//     console.log(y); 
// } 
// disp("abc") 
// disp(1,"xyz");
// 依次从上到下输出为 abc
                    // underfined
                    // abc
                    // xyz
