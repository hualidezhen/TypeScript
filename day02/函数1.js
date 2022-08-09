// 函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。
function function_name(value) {
    // 语句
    var value1 = value;
    return value1;
}
// 该函数的返回值value1是string类型
// 带有多个参数的函数
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
// 1.可选参数，在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？
// function buildName1(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }
// let result1 = buildName1("Bob");                  // 错误，缺少参数
// let result2 = buildName1("Bob", "Adams", "Sr.");  // 错误，参数太多了
// let result3 = buildName1("Bob", "Adams");         // 正确
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
// 注意：可选参数必须放在必选参数后面，如果第一个firstName要是变成可选，需要将lastName变为必选，且彼此交换位置
// 2.默认参数 ，如果不传入该参数的值，则使用默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000); //500 默认rate为0.5 
calculate_discount(1000, 0.30); //300
//3.剩余参数，剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
// 函数的最后一个命名参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length-1。
function buildName1(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(firstName, restOfName);
    return firstName + " " + restOfName.join(" "); //数组转换成字符串用连接字符串进行拼接
}
var employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
// firstName=joseph，restOfName=["Samuel", "Lucas", "MacKinzie"]
// 匿名函数
// 匿名函数是一个没有函数名的函数 匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。
// 我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。
var res = function (_a) {
    var arguments = _a[0];
};
// 匿名函数自调用 --js中也叫立即执行函数
// 在匿名函数后面使用（）就能够自己调用自己
// (function () { 
//     var x = "Hello!!";   
//     console.log(x)     
//  })()
