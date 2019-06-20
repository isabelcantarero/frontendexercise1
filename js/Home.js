// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByClassName("toDoElement");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

 

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

 
 // Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#toDoList');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'to-do-li-element') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className += "to-do-li-element";
  var inputValue = document.getElementById("toDoListInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue !== '') {
    document.getElementById("toDoList").appendChild(li);
  }

  document.getElementById("toDoListInput").value = "";

 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }

  }

}


// Get the input field
var input = document.getElementById("toDoListInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addToDoElementButton").click();
  }
});


