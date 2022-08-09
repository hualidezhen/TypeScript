// 对象
// ts对象是包含一组键值对的实例，值可以是标量，函数、数组、对象等
// 例如：
var object_name = { 
    key1: "value1", // 标量
    key2: "value",  
    key3: function() {
        console.log("value3");
        return "这个是key3的返回值"
        // 函数
    }, 
    key4:["content1", "content2"] //集合
}

// 访问对象的值
console.log(object_name.key1);
console.log(object_name.key2);
console.log(object_name.key3());
console.log(object_name.key4);


// TS的类型模板
// js下
var sites = { 
    site1:"Runoob", 
    site2:"Google" 
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
    site1:"Runoob", 
    site2:"Google",
}; 

// 对象对应的属性的数据类型得一致
var invokesites = function(obj: { site1:string, site2 :string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
} 
invokesites(sites3)

// 鸭子类型 Duck Type
// 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式。
// 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定。

// 在鸭子类型中，关注点在于对象的行为能做什么，而不是关注对象所属的类型。
interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 
// 错误 
// var newPoint2 = addPoints({x:1},{x:4,y:3})