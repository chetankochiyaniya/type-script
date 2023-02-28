// let stud  ={
// name: "test",
// age: 30,
// phone: 12345678902
// }
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
