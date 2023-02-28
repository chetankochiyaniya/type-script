let stud ={
name: "test",
age: 30,
phone: 12345678902
}

let studentList = [
    { name: "test",age: 30},
    { name: "test2",age: 20}
]

for(let i=0;i<studentList.length;i++){
    let elem = studentList[i]
    console.log("e",elem)
}

studentList.push(stud)
console.log(studentList)