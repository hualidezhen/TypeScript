// 命名空间一个最明确的目的就是解决重名问题
// 命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中
// 关键字 namespace


namespace SomeNameSpaceName {
    // 定义了一个接口和一个类 通过export 才能够让外部可以调用到
    export interface ISomeInterfaceName {
        value2:string
    }
    export class SomeClassName {
        value: number;
        // 构造函数 
        constructor(value: number) {
            this.value = value
        }
    }
}

console.log(new SomeNameSpaceName.SomeClassName(123));

// 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
/// <reference path = "SomeFileName.ts" />


// 嵌套命名空间
// 命名空间支持嵌套，即你可以将命名空间定义在另外一个命名空间里面

namespace namespace_name1 { 
    export namespace namespace_name2 {
        export class class_name {    } 
    } 
}

// 成员的访问使用点号 . 来实现




