// Write your code here!// Step 1: Remove the <main> element with id "main"
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id to "victory"
newHeader.id = "victory";

// Step 4: Set the text content to "YOUR-NAME is the champion"
newHeader.textContent = "Carlton Ndungu is the champion";

// Step 5: Append the new header to the document body
document.body.appendChild(newHeader);
