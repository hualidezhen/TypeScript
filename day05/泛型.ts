// T为类型变量 T帮助我们捕获用户传入的类型(比如：number)，再用T作为返回值
// 就能保证参数类型和返回值类型是相同的，就能够让这个identity适用多个类型，不同与any，不会丢失信息
function identity<T>(arg: T): T {
    return arg;
}

// 使用的时候
let output = identity<string>("myString");  // type of output will be 'string'
// 或者 利用类型推断
let output1 = identity("myString");  // type of output will be 'string'


function identity1<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity1;

// 写一个泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity1: GenericIdentityFn<number> = identity2;


// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


// 泛型约束
interface Lengthwise {
    length: number;
}

// T 被Lengthwise来约束 需要有length属性且值为number类型
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});


// 在泛型约束中使用类型参数
function getProperty(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
