//Array 数组 数组对象是使用单独的变量名来存储一系列的值。
// 指定数组初始化大小
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var sites = new Array("Google", "Runoob", "Taobao", "Facebook");
for (var i = 0; i < sites.length; i++) {
    console.log(sites[i]);
}
//数组解构
var arr = [12, 13];
var x = arr[0], y = arr[1]; // 将数组的两个元素赋值给变量 x 和 y
console.log(x); //12
console.log(y); //13
//数组迭代 可以用for循环语句来循环输出数组的各个元素
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
//多维数组 一个数组的元素也可以是另外一个数组，这样就构成了一个多维数组
// 最简单的多维数组就是二维数组，也是最常见的数组
var multi = [[1, 2, 3], [23, 24, 25]];
console.log(multi[0][0]); //1
console.log(multi[1][2]); //25
//数组可以作为函数的参数，也可以作为函数的返回值
// 常用的数组的方法
// concat() 拼接两个或多个数值 并返回结果
// every() 检测数组元素的每一个元素是否都符合条件 返回结果为true或者false
// filter()过滤 检测数组元素的每一个元素，并返回符合条件的元素的数组
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed); // 12,130,44
//  forEach() 数组每一个元素都执行一次回调函数
// indexOf()搜索数组中的元素，并返回它所在第一次出现的位置。如果搜索不到，返回值 -1，代表没有此项
// join() 将数组转化为字符串
// lastIndexOf() 返回一个字符串值最后出现的位置，从后往前数
// map()通过指定函数处理数组的每个元素，并返回处理后的数组。
// pop() 删除数组最后一个元素，并返回删除的元素
// push()在最后插入一个元素，并返回插入后的数组长度
// unshift()再最前面插入一个元素 并返回新的长度
// shift()删除并返回数组的第一个元素。
// reduce()将数组元素计算为一个值（从左到右） 0开始
var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
console.log("total is : " + total); // 6
// reduceRight()将数组元素计算为一个值（从右到左）。3开始
// reverse()反转数组的元素顺序。
// slice()选取数组的的一部分，并返回一个新数组。
// some()检测数组元素中是否有元素符合指定条件。
// sort()对数组的元素进行排序。
// splice()从数组中添加或删除元素。
var arr1 = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr1.splice(2, 0, "water");
console.log("After adding 1: " + arr1); // orange,mango,water,banana,sugar,tea 
console.log("removed is: " + removed);
removed = arr1.splice(3, 1);
console.log("After removing 1: " + arr1); // orange,mango,water,sugar,tea 
console.log("removed is: " + removed); // banana
// toString()把数组转换为字符串，并返回结果。
