let button = document.querySelector("input.button")
button.addEventListener("click", addAuthor);

  
 function addAuthor(){
    const addButton = document.createElement('button');
    button.innerText = 'Add author'
    output += "Add the information for the next author below."
    output += "<textarea style=' background-color: #e9e9e9; width: 55%; padding: 12px, 20px; size: 55%; placeholder = 'author name';></textarea <br>";
    output += "<textarea style=' background-color: #e9e9e9; width: 55%; padding: 12px, 20px; size: 55%; placeholder = 'author background';></textarea <br>";
    button.onclick = output = "";
    result.style.display = "block";
 }