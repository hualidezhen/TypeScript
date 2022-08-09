// TypeScript 是面向对象的JavaScript
// 类描述了所创建的对象的共同的属性和方法，TS支持面向对象的所有特性，包括类，接口等
// 定义类的关键词为class,后面紧跟类名，类可以包含以下几个模块
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 创建了一个汽车类
var Car = /** @class */ (function () {
    // 构造函数 
    function Car(engine) {
        this.engine = engine;
    }
    // 方法 
    Car.prototype.disp = function () {
        console.log("发动机为 :   " + this.engine);
    };
    return Car;
}());
// 创建一个实例化对象
var obj = new Car("ceshi");
// 类中的字段属性和方法可以使用 . 号来访问：
// 访问属性
console.log(obj.engine);
// 访问方法
console.log(obj.disp()); // 输出为：ceshi underfined 因为disp无返回值
// 类的继承
// TS支持类的继承，即我们可以在创建类的时候继承一个已经存在的类 也是用extends关键字
// 子类除了不能够继承父类的私有成员和构造函数，其他都能够继承
// 注意：TS不支持继承多个类（A 继承 B,C 这个写法不支持），但能够支持多重继承，如A继承B，B继承C
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj1 = new Circle(223); //继承了Shape的Area属性
obj1.disp(); //圆的面积:  223
//  多重继承
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); // 多重继承，继承了 Child 和 Root 类
var obj2 = new Leaf();
obj2.str = "hello";
console.log(obj2.str); //hello
//继承类的方法重写
// 类继承之后，子类可以对父类的方法重新定义，这个过程称之为方法的重写
// supper关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 重写了父类的doPrint方法
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
//  输出结果：  父类的 doPrint() 方法。
// 子类的 doPrint()方法。
// static关键字
// static关键字用于定义类的数据成员（属性和方法）为静态的，静态的成员可以直接用类名调用
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
//  instanceof运算符
// 用于判断对象是否是指定的类型，如果是返回true，不是返回false
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj3 = new Person();
var isPerson = obj3 instanceof Person;
console.log("obj3 对象是 Person 类实例化来的吗？ " + isPerson); //obj 对象是 Person 类实例化来的吗？ true
//  定义个类实现ILoan接口，可以使用它里面的字段
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj4 = new AgriLoan(10, 1);
console.log("利润为 : " + obj4.interest + "，抽成为 : " + obj4.rebate);
//  利润为：10，抽成为：1
