var stud = {
    name: "test",
    age: 30,
    phone: 12345678902
};
var studentList = [
    { name: "test", age: 30 },
    { name: "test2", age: 20 }
];
for (var i = 0; i < studentList.length; i++) {
    var elem = studentList[i];
    console.log("e", elem);
}
studentList.push(stud);
console.log(studentList);
