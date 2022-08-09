// 我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
// 元组中允许存储不同类型的元素，元组可以作为参数传递给函数。
// 声明一个元组并初始化
var mytuple = [10, "Runoob"];
console.log(mytuple[0]); //10 
console.log(mytuple[1]); //Runoob
// 元组运算
// 跟数组类似的方法：push()在元组最后添加元素、pop在元组最后删除一个元素并返回
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("添加前元素个数：" + mytuple.length); // 返回元组的大小
mytuple.push(12); // 添加到元组中
console.log("添加后元素个数：" + mytuple.length);
console.log("删除前元素个数：" + mytuple.length);
console.log(mytuple.pop() + " 元素从元组中删除"); // 删除并返回删除的元素
console.log("删除后元素个数：" + mytuple.length);
// 输出 添加前元素个数：4
// 添加后元素个数：5
// 删除前元素个数：5
// 12 元素从元组中删除
// 删除后元素个数：4
// 更新元组 元组是可变的，这意味着我们可以对元组进行更新操作：
var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple[0]);
// 更新元组元素
mytuple[0] = 121;
console.log("元组中的第一个元素更新为：" + mytuple[0]); //121
// 解构元组 跟数组类似
var a = [10, "Runoob"];
var b = a[0], c = a[1];
console.log(b); //10    
console.log(c); //Runoob
