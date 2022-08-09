//TS的运算符主要包含以下几种：算数运算符、逻辑运算符、关系运算符、按位运算符、赋值运算符
//  三元/条件运算符、字符串运算符、类型运算符
//1.算数运算符：+、-、*、/、++、--
//2.关系运算符：==、!=、>、<、>=、<=
//3.逻辑运算符：&&、||、！
//4.短路运算符:&&、||
// 意思就是对于&&。如果&&左边的判断为false，则不在执行后面的判断，直接返回false
// 对于||。如果左边的判断为ture，则不在执行后面的判断，直接返回为true
//5.位运算符：位操作是程序设计中对位模式按位或二进制数的一元和二元操作。
// &、|、~、^、<<、>>、>>>
// 例子
x = 5 && 1; // 0101 & 0001 => 0001 => 1
x = 5 | 1; //  0101 | 0001 => 0101 => 5
x = ~5; //取反操作 0101 => 1010 => -6
// console.log(x4);
x = 5 ^ 1; //异或操作 0101 ^ 0001 => 0100 => 4
var xs = 5 << 1; //左移操作 把 << 左边的运算数的各二进位全部左移若干位，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。
// 0101 << 1 => 1010 => 10
// console.log(xs);
x = 5 >> 1; //右移操作 把 >> 左边的运算数的各二进位全部右移若干位，>> 右边的数指定移动的位数
//0101 >> 1 => 0010 => 2
x = 2 >>> 1; //无符号右移、与有符号右移位类似，除了左边一律使用0 补位。
// 0010 >>> 1 => 0001 => 1
var a = 2; // 二进制 10 
var b = 3; // 二进制 11
var result;
result = (a & b);
console.log("(a & b) => ", result);
result = (a | b);
console.log("(a | b) => ", result);
result = (a ^ b);
console.log("(a ^ b) => ", result);
result = (~b);
console.log("(~b) => ", result);
result = (a << b);
console.log("(a << b) => ", result);
result = (a >> b);
console.log("(a >> b) => ", result);
result = (a >>> 1);
console.log("(a >>> 1) => ", result);
//6.赋值运算符 用于给变量赋值
// =（赋值）、+=（先进行加运算后赋值）、-=（先进行减运算后赋值）、*=（先进行乘运算后赋值）、/=(先进行除运算后赋值)
//7.三元运算符 Test ? expr1 : expr2
//8.类型运算符
//typeof运算符是一元运算符、返回操作数的数据类型
var num = 12;
console.log(typeof num); //输出结果: number
// instanceof 运算符用于判断对象是否为指定的类型
var num1 = '123';
console.log(num1 instanceof String);
