// Create a "X" button and append it to each "TODO" that located in the list before adding new one.
// The button get a classname of "close".
let mylist = document.getElementsByTagName("LI"); // Every line that has li
for (i = 0; i < mylist.length; i++) { // Run on a loop of the li's
    let span = document.createElement("SPAN"); // every li get a span
    let xText = document.createTextNode("x"); // "x" text inside span
    span.className = "close"; // every li get a class of "close"
    span.appendChild(xText);
    mylist[i].appendChild(span);
}

// Create a new "TODO" when clicking on the "Add" button
function newElement() { 
    let li = document.createElement("li"); // Create new li
    let inputValue = document.getElementById("myInput").value; // Take what i write in input 
    let t = document.createTextNode(inputValue); // Create the same text in the input
    li.appendChild(t); // Append it to the li i created in line 14
    if (inputValue === '') { // If its empty alert
        alert("You must write something!");
    } else { // Else add th li to my UL 
        document.getElementById("myUL").appendChild(li);
    }// Turn the input back to clear input
    document.getElementById("myInput").value = "";

    //Here we make a close button ('x') for a new added "TODO" in the list
    let span = document.createElement("SPAN"); // We create span element
    let xText = document.createTextNode("x"); // The text in the span will be "x"
    span.className = "close"; // The button gets a classname of "close"
    span.appendChild(xText); // Append the text of the button to the span i created
    li.appendChild(span); // Append the span to the li i created

    //When you click on the "x" button its hide the current "TODO" *on the new element!*
    for (i = 0; i < close.length; i++) { // Running on a loop on all of the buttons
        close[i].onclick = function () { // When you click you activate a function 
            let div = this.parentElement;// Its goes to the same div
            div.style.display = "none"; // And hide the li
        }
    }
}

// Click on a "X" button to hide the current "TODO" *on the default element!*
let close = document.getElementsByClassName("close");// The "x" button with the class of "close"
for (i = 0; i < close.length; i++) { // Run on a loop of the "x" buttons
    close[i].onclick = function () { // function that go to the current div and hide him
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "Checked Mark" when clicking on a "TODO"
let list = document.querySelector('ul'); // the list of them
list.addEventListener('click', function (ev) { // the Event work only when you click on something on the list
    if (ev.target.tagName === 'LI') { // if the tag name is LI its mark it with a class of checked
        ev.target.classList.toggle('checked');
    }
}, false);
