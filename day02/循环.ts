//1.for循环
// for ( init; condition; increment ){
//     statement(s);
// // }
var num:number = 5; 
var i:number; 
var factorial = 1; 
 
for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)// 输出120

//2.for..in循环 用于一组数值的集合或列表进行迭代输出
// for (var val1 in list) { 
//     //语句 
// }
// val1 需要为 string 或 any 类型。

var j:any; 
var n:any = "a b c"  
 
for(j in n) {
    console.log(n[j])  
}
//依次输出a b c

//for..of 语句创建一个循环来迭代可迭代的对象,在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议,for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等
let someArray = [1, "string", false];
 
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

//while循环
// while(condition)
// {
//    statement(s);
// }

//do..while循环 
// do
// {
//    statement(s);
// }while( condition );
// 条件表达式出现在循环的尾部，所以循环中的 statement(s) 会在条件被测试之前至少执行一次。
// 如果条件为 true，控制流会跳转回上面的 do，然后重新执行循环中的 statement(s)。这个过程会不断重复，直到给定条件变为 false 为止


//break语句 主要有两种用法：1.出现在循环内的时候，循环会立即终止、且程序流将继续执行紧接着循环的下一条语句（跳出循环）。
// 2.它可用于终止 switch 语句中的一个 case。

// continue语句 会跳过当前循环中的代码，强迫开始下一次循环
// 对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句重新执行条件判断语句。

// 无限循环 

for(;;) { 
    // 语句
 }

//  或者

while(true) { 
    // 语句
 } 
