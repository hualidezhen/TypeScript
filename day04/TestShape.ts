/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
// 命名空间的名称.被调用的名字
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 

console.log(new Drawing.Circle());
console.log(new Drawing.Triangle());

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());




