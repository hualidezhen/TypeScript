// 接着定义一个变量customer.它的类型是 IPerson。
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
// 再定义一个变量employee
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
// commandline 是字符串
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一个函数表达式 返回类型是string
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
// console.log(options.commandline());
console.log(fn());
// 类型一致，正确
var list2 = ["Google", "Runoob", "Taobao"];
// 错误元素 1 不是 string 类型
// var list2:namelist = ["Runoob",1,"Taobao"]
list2[3] = "hello"; //通过索引添加一个元素进去
console.log(list2);
var drummer = {
    age: 21,
    instrument: "Drunms"
};
console.log("年龄:  " + drummer.age);
console.log("喜欢的乐器:  " + drummer.instrument);
var obj = { v1: 1, v2: 2, v3: 3 };
console.log("value 1: " + obj.v1 + " value 2: " + obj.v2 + " value 3: " + obj.v3);
