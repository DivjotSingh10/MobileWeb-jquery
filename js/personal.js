/*This is Assignement 1
Name: Divjot Singh Chawla
Student Number: 991505770 
Submitted to: Ann Cadger */

$(document).ready(function () {

  let newName = localStorage.getItem("StudentName");
  let newId = localStorage.getItem("Student ID");
  let newLogin = localStorage.getItem("Student Login");

  $(myName).html("My name is " + `${newName}`);
  $(myStudentNumber).html("My Student Number is " + `${newId}`);
  $(myLogin).html("My Login Id is " + `${newLogin}`);

});