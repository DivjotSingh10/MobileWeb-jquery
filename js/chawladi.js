/*This is Assignement 1
Name: Divjot Singh Chawla
Student Number: 991505770 
Submitted to: Ann Cadger */

class Data{
  constructor(initial, element, image){
    this.initial=initial;
    this.element= element;
    this.image= image;
  };
};

var mydata = new Array();
mydata.push(new Data("C","Cat","cat.png"));
mydata.push(new Data("H","Hen","hen.jpg"));
mydata.push(new Data("A","Apple","apple.jpg"));
mydata.push(new Data("W","Water","water.jpg"));
mydata.push(new Data("L","Love","love.jpg"));
mydata.push(new Data("A","Ant","ant.jpg"));
mydata.push(new Data("D","Dog","dog.jpg"));
mydata.push(new Data("I","Ice-cream","icecream.jpg"));

$(document).ready(function(){
  let name= "Divjot S Chawla";
  let id= "991505770";
  let login ="chawladi";
  
  $("header").html(name);
  $("footer").html("Student No: "+ id+ " and Login: "+login);

  localStorage.setItem("StudentName", name);
  localStorage.setItem("Student ID",id);
  localStorage.setItem("Student Login",login);

  $("#format").click(function () {
    $("section[title ^= 'ListSection']").toggleClass("mystyle");
  });

  $("#toggle").click(function () {
    let charInitial = (document.getElementById("initial").value).toUpperCase();
    $(`section[title ^= '${charInitial}']`).toggle();
  });

});
  function displayData(){
    for (let source of mydata){
      document.getElementById("dataList").innerHTML +=
      `<section title='${source.initial}'>
      <strong>${source.initial}</strong>
      is for ${source.element}
      <img src='images/${source.image}' width='25'>
      <hr></section>`;
    }
  }
