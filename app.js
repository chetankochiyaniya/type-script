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
var Students = /** @class */ (function () {
    function Students(name) {
        this._name = name;
    }
    Students.prototype.getData = function () {
        return this._name;
    };
    return Students;
}());
var s = new Students("chetan");
console.log(s.getData());
