// TypeScript 是面向对象的JavaScript
// 类描述了所创建的对象的共同的属性和方法，TS支持面向对象的所有特性，包括类，接口等
// 定义类的关键词为class,后面紧跟类名，类可以包含以下几个模块
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作

// 创建了一个汽车类
class Car { 
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}

// 创建一个实例化对象
var obj = new Car("ceshi");
// 类中的字段属性和方法可以使用 . 号来访问：
// 访问属性
console.log(obj.engine );
// 访问方法
console.log(obj.disp()); // 输出为：ceshi underfined 因为disp无返回值


// 类的继承
// TS支持类的继承，即我们可以在创建类的时候继承一个已经存在的类 也是用extends关键字
// 子类除了不能够继承父类的私有成员和构造函数，其他都能够继承

// 注意：TS不支持继承多个类（A 继承 B,C 这个写法不支持），但能够支持多重继承，如A继承B，B继承C
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
  
 class Circle extends Shape { 
    disp():void { 
       console.log("圆的面积:  "+this.Area) 
    } 
 }
   
 var obj1 = new Circle(223);  //继承了Shape的Area属性
 obj1.disp()//圆的面积:  223

//  多重继承
class Root { 
    str:string; 
 } 
  
 class Child extends Root {} 
 class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
  
 var obj2 = new Leaf(); 
 obj2.str ="hello" 
 console.log(obj2.str)//hello


//继承类的方法重写
// 类继承之后，子类可以对父类的方法重新定义，这个过程称之为方法的重写
// supper关键字是对父类的直接引用，该关键字可以引用父类的属性和方法


class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter extends PrinterClass { 
    // 重写了父类的doPrint方法
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }

//  输出结果：  父类的 doPrint() 方法。
            // 子类的 doPrint()方法。


// static关键字
// static关键字用于定义类的数据成员（属性和方法）为静态的，静态的成员可以直接用类名调用
class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("num 值为 "+ StaticMem.num) 
    } 
 } 
  
 StaticMem.num = 12     // 初始化静态变量
 StaticMem.disp()       // 调用静态方法


//  instanceof运算符
// 用于判断对象是否是指定的类型，如果是返回true，不是返回false

class Person{ } 
var obj3 = new Person() 
var isPerson = obj3 instanceof Person; 
console.log("obj3 对象是 Person 类实例化来的吗？ " + isPerson);//obj 对象是 Person 类实例化来的吗？ true


// 访问控制修饰符
// TS中，可以使用访问控制符来保护类，变量，和构造方法的访问，TS有三种，public，private，protected
// public(默认)：共有，可以在任何地方被访问
// protected：受保护的，可以被其自身和子类访问
// private：私有的，只能在所定义的类里面才能访问

// 类和接口
// 类可以实现接口，使用关键字implements.并将接口的字段作用类的属性使用

// 定义一个接口，有一个interest字段
interface ILoan { 
    interest:number 
 } 
  

//  定义个类实现ILoan接口，可以使用它里面的字段
 class AgriLoan implements ILoan { 
    // 实现接口中的所有的共有属性得要声明一遍
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
  
 var obj4 = new AgriLoan(10,1) 
 console.log("利润为 : "+obj4.interest+"，抽成为 : "+obj4.rebate )
//  利润为：10，抽成为：1