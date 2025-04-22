// // Changing the text dynamically
// document.getElementsByClassName("editable").addEventListener("click",function(){document.getElementsById("description").textContent="Think of Javascript as what makes our website super fun to navigate";});
// // css via Javascript
// document.getElementById("box").styles.color="red";
// // Add remove an element when button is clicked
// document.getElementById("button").addEventListener("click" ,function(){box=document.getElementById("box");
//   box.classList.toggle("hidden");
// });

const description=document.getElementById("description");
description.textContent="Think of Javascript as what makes our website super fun to navigate"

const content=document.getElementById("what");
content.textContent="DOM views our website page like a wholesome tree with the body as the trunk and the branches and leaves as tiny details that make it.DOM acesses each component and modifies.In short it is like a bridge that links HTML,CSS to Javascript"

const paragraph=getElementById("how");
paragraph.innerHTML="<p>Dynamic content</p>";

// To modify a document using javascript we first have to give it our variable
// We then acces it using the getElementBy ...... keyword
// We then refer to the variable and the change we want to make.
// It can be variable.textContent/variable.setAttribute/innerHTML/style e.t.c

const text=document.getElementById("box");
text.style.color="red";

const button=document.getElementById("btn");
const message=document.getElementById("message");

button.addEventListener("click",()=>{message.textContent="You clicked the Button!";});

