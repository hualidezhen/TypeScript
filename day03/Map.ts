// Map对象
// Map 对象保存键值对，并且能够记住键的原始插入顺序。
// 任何值(对象或者原始值) 都可以作为一个键或一个值。
let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]); 

// Map的相关函数和属性
// map.clear() – 移除 Map 对象的所有键/值对 。
// map.set() – 设置键值对，返回该 Map 对象。
// map.get() – 返回键对应的值，如果不存在，则返回 undefined。
// map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
// map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
// map.size – 返回 Map 对象键/值对的数量。
// map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
// map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。

let nameSiteMapping = new Map();
 
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
 
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2
 
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false
 
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3
 
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping.keys());
console.log(nameSiteMapping.values());

// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping);

// 迭代Map
// Map 对象中的元素是按顺序插入的，我们可以迭代 Map 对象，每一次迭代返回 [key, value] 数组。
let nameSiteMapping1 = new Map();
 
nameSiteMapping1.set("Google", 1);
nameSiteMapping1.set("Runoob", 2);
nameSiteMapping1.set("Taobao", 3);
 
// 迭代 Map 中的 key
for (let key of nameSiteMapping1.keys()) {
    console.log(key);                  
}
 
// 迭代 Map 中的 value
for (let value of nameSiteMapping1.values()) {
    console.log(value);                 
}
 
// 迭代 Map 中的 key => value 键值对
for (let entry of nameSiteMapping1.entries()) {
    console.log(entry[0], entry[1]);   
}
 
// 使用对象解析
for (let [key, value] of nameSiteMapping1) {
    console.log(key, value);            
}


