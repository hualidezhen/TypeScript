// 命名空间一个最明确的目的就是解决重名问题
// 命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中
// 关键字 namespace
var SomeNameSpaceName;
(function (SomeNameSpaceName) {
    var SomeClassName = /** @class */ (function () {
        // 构造函数 
        function SomeClassName(value) {
            this.value = value;
        }
        return SomeClassName;
    }());
    SomeNameSpaceName.SomeClassName = SomeClassName;
})(SomeNameSpaceName || (SomeNameSpaceName = {}));
console.log(new SomeNameSpaceName.SomeClassName(123));
