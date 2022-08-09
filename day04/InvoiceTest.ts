/// <reference path = "Invoice.ts" />
// 有几个嵌套命名空间，都用.来实现
var invoice = new Runoob.invoiceApp.Invoice(); 
console.log(invoice.calculateDiscount(500));