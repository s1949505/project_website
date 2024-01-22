// common.js// index.js
function saveText(nextPage) {
    // Get the text from the textarea
    var DatasetName = document.getElementById("myTextarea").value;
// Save the text to localStorage (you can use other storage mechanisms)
    localStorage.setItem("DatasetName", DatasetName);
    
    var description = document.getElementById("description").value;
    localStorage.setItem("description", description);

    var motivation = document.getElementById("motivation").value;
    localStorage.setItem("motivation", motivation);

    var research = document.getElementById("research").value;
    localStorage.setItem("research", research);

    var authors = document.getElementById("authors").value;
    localStorage.setItem("authors", authors);

    var contributors = document.getElementById("contributors").value;
    localStorage.setItem("contributors", contributors);
//DO RADIO QUESTIONS
    var date = document.getElementById("date").value;
    localStorage.setItem("date", date);

    var version = document.getElementById("version").value;
    localStorage.setItem("version", version);

    var applications = document.getElementById("applications").value;
    localStorage.setItem("applications", applications);

    var datatypes = document.getElementById("datatypes").value;
    localStorage.setItem("datatypes", datatypes);

    var qorq = document.getElementById("qorq").value;
    localStorage.setItem("qorq", qorq);

    var size = document.getElementById("size").value;
    localStorage.setItem("size", size);

    var personal = document.getElementById("personal").value;
    localStorage.setItem("personal", personal);

    var flaws = document.getElementById("flaws").value;
    localStorage.setItem("flaws", flaws);

    var splits = document.getElementById("splits").value;
    localStorage.setItem("splits", splits);

    var collection = document.getElementById("collection").value;
    localStorage.setItem("collection", collection);

    var format = document.getElementById("format").value;
    localStorage.setItem("format", format);

    var languages = document.getElementById("languages").value;
    localStorage.setItem("languages", languages);

    var doi = document.getElementById("doi").value;
    localStorage.setItem("doi", doi);

    var licence = document.getElementById("licence").value;
    localStorage.setItem("licence", licence);

    var update = document.getElementById("update").value;
    localStorage.setItem("update", update);

    var Uses = document.getElementById("Uses").value;
    localStorage.setItem("Uses", Uses);

    var unsafe = document.getElementById("unsafe").value;
    localStorage.setItem("unsafe", unsafe);

    var bias = document.getElementById("bias").value;
    localStorage.setItem("bias", bias);

    var cite = document.getElementById("cite").value;
    localStorage.setItem("cite", cite);

    var further = document.getElementById("further").value;
    localStorage.setItem("further", further);

    if (nextPage){
        window.location.href = nextPage.html
    }

}

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve text from localStorage (you can use other storage mechanisms)
    var cite = localStorage.getItem("cite");

    // Display the text in the paragraph
    if (savedText) {
        document.getElementById("displayParagraph").innerText = cite;
    }
});