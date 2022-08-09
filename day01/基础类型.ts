//TS包含的基础数据类型有：
// 任意类型：any、数字：number、字符串：string、布尔类型：boolean
// 数组：无、 元组：无、枚举：enum、void：void、null、underfined、nerver
 

// 1.任意类型:any
// 任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况。
// 1、变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查。例如：
let x:any = 1 //数字类型
x = 'i an who i am' //字符串类型
x = false //布尔类型

//2.改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，例如
let x1:any = 4;
// x.ifitExists(); // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
// x.toFixed();    // 正确

let arrayList: any[] = [1,false,'fine'];
arrayList[1] = 100 //下标索引为1的false改为数字、
console.log(arrayList);



//2.数组类型
// 在元素类型后面加上[]
let arr1: number[] = [1, 2];
console.log("arr1:"+arr1);
// 或者使用数组泛型
let arr2: Array<number> = [1, 2];


//3.元组Tuple：组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let tuple:[string,number];
x = ['hello',100,true] //ok
// x = [100,'hello'] //error  后面的覆盖前面
console.log(x);
console.log(x[0].substr(1)); // OK  substr 截取字符串指定下标的字符
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
x[5] = 10086;
// x[5].toString()// OK, 'string' 和 'number' 都有 toString
// console.log(x[5].substr(1)); 
// x[6] = true; // Error, 布尔不是(string | number)类型
console.log(x);


// 4.枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {red,green,blue};
let c:Color = Color.green;
console.log("c:"+c);//输出的是1 为枚举的元素编号值
//默认从0开始、也可以手动设置编号起始
enum Color {Red = 1, Green, Blue}
let c1: Color = Color.Green;
console.log("c1:"+c1);//输出的是2 为枚举的元素编号值
// 或者，全部都采用手动赋值：
enum Color {Red1 = 1, Green1 = 2, Blue1 = 4}
let c2: Color = Color.Blue1;
console.log("c2:"+c2);//输出的是4 为枚举的元素编号值


// 5.null和underfined
// 1.在 JavaScript 中 null 表示 "什么都没有"。null是一个只有一个值的特殊类型。表示一个空对象引用。
// 用 typeof 检测 null 返回是 object。在 JavaScript 中, undefined 是一个没有设置值的变量。typeof 一个没有值的变量会返回 undefined。
// Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。
// 2.而在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型
// 启用 --strictNullChecks
let x2: number;
x2 = 1; // 编译正确
// x2 = undefined;    // 编译错误
// x2 = null;    // 编译错误

// 启用 --strictNullChecks 用|可支持多类型
let x3: number | null | undefined;
x3 = 1; // 编译正确
x3 = undefined;    // 编译正确
x3 = null;    // 编译正确



// 6.never类型
// never是其他类型（包括null和underfined的子类型）代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），
// 子类型可以向父类型赋值、父类型不能向子类型赋值

let z: never;
let y: number;

// 编译错误，数字类型不能转为 never 类型
// z = 123;

// 运行正确，never 类型可以赋值给 never类型
// z = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
// y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}//无限循环
}


// 7.void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;//可以赋值null和underfined，因为他们是void的子类型

//8.object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;


create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error