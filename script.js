//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function(e) {
// Capture input values
const title = document.getElementById("title").value.trim();
const author = document.getElementById("author").value.trim();
const isbn = document.getElementById("isbn").value.trim();

// Check if inputs are not empty
	if(!title || !author || !isbn){
		alert("Please filll in all the details");
		return;
	}
else {
// Create a new row
const newRow = document.createElement("tr");
                
// Create cells and append to the row
newRow.innerHTML = `
<td>${title}</td>
<td>${author}</td>
<td>${isbn}</td>
<td><button class="delete btn btn-danger">Clear</button></td>
`;

// Append the new row to the table body
document.getElementById("book-list").appendChild(newRow);

// Clear the input fields
document.getElementById("title").value = '';
document.getElementById("author").value = '';
document.getElementById("isbn").value = '';
} 
});

// Event delegation for the delete button
document.getElementById("book-list").addEventListener("click", function(event) {
if (event.target.classList.contains("delete")) {
const row = event.target.closest("tr");
row.remove(); // Remove the row
 }
});