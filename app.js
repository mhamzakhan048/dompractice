// Q no1.i

var maini = document.getElementById('main-content');

// Qno 1.ii

console.log(maini.children);

// Qno 1.iii

var mainiii = document.getElementsByClassName('render');

document.write("<br>"+ "<br>"+ "<br>" +"Display all children on your browser" + "<br>" + "<br>" + "<br>" + "<br>")

for (i=0 ; i<q1Part3.length ; i++) {
    document.write(mainiii[i].innerHTML + "<br>")
}

// Qno 1.iv

var mainiv = document.getElementById('first-name');

mainiv.value = "Muhammad Hamza"

// Qno 1.v

var mainivI = document.getElementById('last-name');

mainivI.value = "Khan"


var mainivII = document.getElementById('email');

mainivII.value = "kbrother129@gmail.com"


// Qno 2.i

var formi = document.getElementById('form-content');

console.log(formi.nodeType); // 1 means Element

// Qno2.ii

var formii = document.getElementById('lastName');

console.log(formii.nodeType);
console.log(formii.childNodes);

// Qno2.iii

formii.childNodes[0].nodeValue = "Last Name : Khan";

// Qno 2.iv

console.log(maini.lastElementChild);
console.log(maini.firstElementChild);

// Qno2.v

console.log(formii.nextElementSibling);
console.log(formii.previousElementSibling);


// Qno 2.vi

console.log(mainivII.parentNode)
console.log(mainivII.parentNode.nodeType)