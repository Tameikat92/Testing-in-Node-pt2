

const students = require('../data/students');
const course = require('../data/course');

const {printStudentNames} = require('./arrayUtils');
const {printCourse} = require('./objectUtils');

console.log("List of Students: ");
printStudentNames(students);

console.log(course);
