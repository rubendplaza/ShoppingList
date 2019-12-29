// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//   console.log("Button Clicked!");
// });

// button.addEventListener("mouseenter", function(){
//   console.log("Mouse Entered!");
// });

// button.addEventListener("mouseleave", function(){
//   console.log("Mouse Left!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var existingItems = document.querySelectorAll("li");

for(var i = 0; i < existingItems.length; i++){
  existingItems[i].textContent = existingItems[i].textContent + "   ";
}

for(var i = 0; i < existingItems.length; i++){
  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.addEventListener("click", deleteItem, false);
  existingItems[i].appendChild(deleteBtn);
}

function deleteItem(e){
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  e.target.parentNode.removeChild(e.target);
}

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.addEventListener("click", deleteItem, false);

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value + "   "));
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick(){
  if(inputLength() > 0){
    createListElement();
  }
}

function addListAfterKeypress(e){
  if(inputLength() > 0 && e.keyCode === 13){
    createListElement();
  }
}

function toggleDoneAfterClick(e){
  e.target.classList.toggle("done");
}

//IMPORTANT
// call back function thats why no arguments are passed, because you do not want to actually call the function you just want the listener to have a reference of that function so that when there is an event it knows which function to call

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDoneAfterClick, false);
