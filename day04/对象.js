// 对象
// ts对象是包含一组键值对的实例，值可以是标量，函数、数组、对象等
// 例如：
var object_name = {
    key1: "value1",
    key2: "value",
    key3: function () {
        console.log("value3");
        return "这个是key3的返回值";
        // 函数
    },
    key4: ["content1", "content2"] //集合
};
// 访问对象的值
console.log(object_name.key1);
console.log(object_name.key2);
console.log(object_name.key3());
console.log(object_name.key4);
// TS的类型模板
// js下
var sites = {
    site1: "Runoob",
    site2: "Google"
};
//  添加一个方法
// sites.sayHello = function(){ return "hello";} //报错，没有这个方法
// 在ts中需要声明一个类型模板才能够添加 不能够像js一样直接添加进去
var sites2 = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites2.sayHello = function () {
    console.log("hello " + sites2.site1);
};
sites2.sayHello();
// 对象也可以作为一个函数的参数进行传递
// 例如
var sites3 = {
    site1: "Runoob",
    site2: "Google"
};
// 对象对应的属性的数据类型得一致
var invokesites = function (obj) {
    console.log("site1 :" + obj.site1);
    console.log("site2 :" + obj.site2);
};
invokesites(sites3);
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
// 正确
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
// 错误 
// var newPoint2 = addPoints({x:1},{x:4,y:3})
