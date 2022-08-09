// 1.变量是一种使用方便的占位符，用于引用计算机内存地址，可以把变量看做存储数据的容器
// 变量名称可以包含数字和字母、除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格、变量名不能以数字开头
// var [变量名] : [类型] = 值;
// 没有初始值变量值会设置为undefined  var uname:string;

// var [变量名] = 值; 设置了初始值但没有设置类型，该变量可以是任意类型 js中的写法

var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)

// 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。

// TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，
// var num:number = "hello"     // 这个代码会编译错误


// 类型断言（Type Assertion）
// 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。它却不被称为类型转换
// 值 as 类型

var assertion:any = "1";
console.log(typeof assertion);
assertion as number;
console.log(typeof assertion);

//类型推断
// 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
// 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

var num = 2;    // 类型推断为 number
// var num = "hello";
console.log("num 变量的值为 "+num); 
// num = "12";    // 编译错误 因为变量已经设置为了 number 类型。
console.log(num);

// 变量作用域
// 变量作用域指定了变量定义的位置，程序中变量的可用性由变量作用域决定
// 主要分为全局作用域、类作用域、局部作用域


var global_num = 12          // 全局变量--存在全局作用域
class Numbers { 
   num_val = 13;             // 实例变量--存在类作用域中
   static sval = 10;         // 静态变量--存在类作用域中
   
   storeNum():void { 
      var local_num = 14;    // 局部变量--存在局部作用域中
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量 可以直接通过类名来访问
var obj1 = new Numbers(); 
console.log("实例变量: "+obj1.num_val)
// console.log("局部变量："+obj1.local_num);//报错 访问不到


