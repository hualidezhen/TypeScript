// 联合类型 Type1|Type2|Type3 
// 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
var value;
value = 12;
console.log(value);
value = "hello";
console.log(value);
// value = true;
// console.log(value);
//联合类型可以作为函数参数使用 
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("Runoob");
console.log("输出数组....");
disp(["Runoob", "Google", "Taobao", "Facebook"]);
// disp(12) //报错
// 注意：只能赋值指定的类型，如果赋值其它类型就会报错。
// 联合类型数组
var arr;
var i;
arr = [1, 2, 4,]; //要么全是number类型
console.log("**数字数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Runoob", "Google", "Taobao"]; //要么全是字符串类型 两者不能共存 
console.log("**字符串数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
