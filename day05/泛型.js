// T为类型变量 T帮助我们捕获用户传入的类型(比如：number)，再用T作为返回值
// 就能保证参数类型和返回值类型是相同的，就能够让这个identity适用多个类型，不同与any，不会丢失信息
function identity(arg) {
    return arg;
}
// 使用的时候
var output = identity("myString"); // type of output will be 'string'
// 或者 利用类型推断
var output1 = identity("myString"); // type of output will be 'string'
function identity1(arg) {
    return arg;
}
var myIdentity = identity1;
function identity2(arg) {
    return arg;
}
var myIdentity1 = identity2;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
// T 被Lengthwise来约束 需要有length属性且值为number类型
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
// 在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
