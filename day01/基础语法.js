// TypeScript 程序由以下几个部分组成：模板、函数、变量、语句和表达式、注释
// TS 会忽略程序中出现的空格、制表符和换行符、区分大小写
// TS是一种面向对象的编程语言：对象和类
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runbob");
    };
    return Site;
}());
var obj = new Site();
// console.log(obj.name());
obj.name();
var hello = "Hello World!";
console.log(hello);
