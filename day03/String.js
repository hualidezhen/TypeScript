// String 字符串对象
// 支持constructor、length、prototype三个方法
// 1.constructor 对创建该对象的函数的引用
var str = new String("This is string");
console.log("str.constructor is:" + str.constructor);
// 输出为：str.constructor is:function String() { [native code] }
//2.length 返回字符串的长度 String(value).length
//3.prototype 允许您想对象添加属性和方法
// String对象支持的方法有：
// 1 chartAt() 返回指定位置的字符
var str = new String("RUNOOB");
console.log("str.charAt(0) 为:" + str.charAt(0)); // R
// 2 charCodeAt() 返回在指定位置的字符的Unicode编码
var str = new String("RUNOOB");
console.log("str.charCodeAt(0) 为:" + str.charCodeAt(0)); // 82
// 3 concat() 拼接两个或者多个字符串
var str1 = new String("RUNOOB");
var str2 = new String("GOOGLE");
// var str3 = str1.concat(str2); 
// console.log("str1 + str2 : "+str3) // RUNOOBGOOGLE
//4 indexOf() 返回某个指定字符首次在字符串中出现的位置 找不到返回-1
var str1 = new String("RUNOOB");
var index = str1.indexOf("OO");
console.log("查找的字符串位置 :" + index); // 3
//5 lastIndexOf() 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
var str1 = new String("This is string one and again string");
var index = str1.lastIndexOf("string");
console.log("lastIndexOf 查找到的最后字符串位置 :" + index); // 29
index = str1.lastIndexOf("one");
console.log("lastIndexOf 查找到的最后字符串位置 :" + index); // 15
//6.	localeCompare()用本地特定的顺序来比较两个字符串。
var str1 = new String("This is beautiful string");
var index = str1.localeCompare("This is beautiful string");
console.log("localeCompare first :" + index); // 0无不同返回0 有不同返回1
//7	match()查找找到一个或多个正则表达式的匹配。
var str3 = "The rain in SPAIN stays mainly in the plain";
var n1 = str3.match(/ain/g); // ain,ain,ain
// 8.replace()替换
var re = /(\w+)\s(\w+)/;
var str4 = "zara ali";
// var newstr = str4.replace(re, "$2, $1"); 
var newstr = str4.replace("zara", "hello");
console.log(newstr); // ali, zara
//9.search 搜索
var newstr1 = str4.search("a");
console.log(newstr1); //1 a在字符串中的位置的索引
//10.slice 提取字符串的片段，并在新的字符串中返回被提起的部分
var newstr2 = str4.slice(2);
console.log(newstr2); //ra ali
//11 split()把字符串分割为子字符串数组。
//12 substr()从起始索引号提取字符串中指定数目的字符
var newstr3 = str4.substr(2, 1); //一个参数表示从当前位置开始到结束，两个参数 第二个参数表示提取数量
console.log(newstr3); //ra ali
//13 substring() 提取字符串中两个指定的索引号之间的字符 [)形式
//14 toLocaleLowerCase() 根据主机的语言环境把变为小写
//15 toLocaleUpperCase 根据主机的语言环境把变为大写
//16 toLowerCase() 把字符串转换为小写
//17 oUpperCase() 把字符串转换为大写
// 18 toString() 转换为字符串
//19 valueOf() 返回指定字符串对象的原始值
var str = new String("Runoob");
console.log(str.valueOf(1)); // Runoob
