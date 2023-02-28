"use strict";
exports.__esModule = true;
// let stud  ={
// name: "test",
// age: 30,
// phone: 12345678902
// }
// let studentList = [
//     { name: "test",age: 30},
//     { name: "test2",age: 20}
// ]
// for(let i=0;i<studentList.length;i++){
//     let elem = studentList[i]
//     console.log("e",elem)
// }
// studentList.push(stud)
// console.log(studentList)
// enum LanguageName {a,b,c}
//interface
// interface StudType{
//     name:string,
//     age:number,
// }
// let stud : StudType ={
//     name: "test",
//     age: 30,
//     }
//     let studentList : StudType[] = [
//             { name: "test",age: 30},
//             { name: "test2",age: 20}
//         ]
// const getData = (studentList :StudType[])=>{
//     for(let i=0;i<studentList.length;i++){
//             let elem = studentList[i]
//             console.log("e",elem)
//         }
// }
// getData(studentList)
// class Students {
//     // private _name:string;
//     // constructor(name:string){
//     //     this._name = name;
//     // }
//     // getData(): string
//     // {
//     //     return this._name
//     // }
//     constructor(private name:string){
//         }
//         getData(): string
//         {
//             return this.name
//         }
// }
// let s = new Students("chetan")
// console.log(s.getData())
// generics
var studentList = [
    { name: "test", age: 30 },
    { name: "test2", age: 20 }
];
var getData = function (studentList) {
    for (var i = 0; i < studentList.length; i++) {
        var elem = studentList[i];
        console.log("e", elem);
    }
};
getData(studentList);
