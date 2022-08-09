// 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，
// 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
interface interface_name { 
}

//定义一个IPerson的接口
interface IPerson{
    firstName:string,
    lastName:string,
    sayHi:() =>string //返回值为string
}

// 接着定义一个变量customer.它的类型是 IPerson。
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

// 再定义一个变量employee
var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  对象 ") 
console.log(employee.firstName) 
console.log(employee.lastName)
console.log(employee.sayHi())  

// 需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。在js文件中会变成一个对象的形式


// 联合类型接口
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
 
// commandline 是一个函数表达式 返回类型是string
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
// console.log(options.commandline());
console.log(fn());


// 接口和数组
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
interface namelist { 
    [index:number]:string //索引为number类型，数组中的所有元素为string类型
 } 
  
 // 类型一致，正确
 var list2:namelist = ["Google","Runoob","Taobao"]
 // 错误元素 1 不是 string 类型
 // var list2:namelist = ["Runoob",1,"Taobao"]
 list2[3] = "hello"; //通过索引添加一个元素进去
 console.log(list2);


//  interface ages { 
//     [index:string]:number 
//  } 

//  var agelist:ages = [1,2];
  // 类型正确 
//  agelist["runoob"] = 15  
  
 // 类型错误，输出  error TS2322: Type '"google"' is not assignable to type 'number'.
 // agelist[2] = "google"
 

// 接口继承
// 一个接口可以通过其他接口来扩展自己，ts允许一个接口继承多个接口 extends 关键字

interface Person{
    age:number
}

interface Musician extends Person {
    instrument:string
}

var drummer:Musician = {
    age:21,
    instrument:"Drunms"
}

console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)

// 多继承实例
interface IParent1{
    v1:number
}

interface IParent2{
    v2:number
}

interface Child extends IParent1,IParent2{
    v3:number
}

var obj:Child={v1:1,v2:2,v3:3}
console.log("value 1: "+obj.v1+" value 2: "+obj.v2+" value 3: "+obj.v3)




