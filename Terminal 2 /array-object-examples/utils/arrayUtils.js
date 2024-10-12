const students = require("../data/students");

const printStudentNames = (students) => {
    students.forEach((student) => {
        console.log(`Student: ${student.name}, Age: ${student.age}`);
    });
}

//module.exports = printStudentNames;
module.exports = printStudentNames;
