
function saveText1(nextPage) {

    // Get the text from the textarea
    const DatasetName = document.getElementById("DatasetName").value;
// Save the text to localStorage (you can use other storage mechanisms)
    localStorage.setItem("DatasetName", DatasetName);
    
    const description = document.getElementById("description").value;
    localStorage.setItem("description", description);

    const motivation = document.getElementById("motivation").value;
    localStorage.setItem("motivation", motivation);

    const accessibilityOption = document.querySelector('input[name="accessibility"]:checked');
    const accessibility = accessibilityOption ? accessibilityOption.value : null;
    localStorage.setItem("accessibility", accessibility);

    const research = document.getElementById("research").value;
    localStorage.setItem("research", research);

    const authors = document.getElementById("authors").value;
    localStorage.setItem("authors", authors);

    const contributors = document.getElementById("contributors").value;
    localStorage.setItem("contributors", contributors);
//DO RADIO QUESTIONS

    const fundingOption = document.querySelector('input[name="funding"]:checked');
    const funding = fundingOption ? fundingOption.value : null;
    localStorage.setItem("funding", funding);

    const combinationOption = document.querySelector('input[name="combination"]:checked');
    const combination = combinationOption ? combinationOption.value : null;
    localStorage.setItem("combination", combination);

    const date = document.getElementById("date").value;
    localStorage.setItem("date", date);

    const version = document.getElementById("version").value;
    localStorage.setItem("version", version);

    window.location.href = nextPage;


}

function saveText2(nextPage) {

    const applications = document.getElementById("applications").value;
    localStorage.setItem("applications", applications);

    const datatypes = document.getElementById("datatypes").value;
    localStorage.setItem("datatypes", datatypes);

    const qorqOption = document.querySelector('input[name="qorq"]:checked');
    const qorq = qorqOption ? qorqOption.value : null;
    localStorage.setItem("qorq", qorq);

    const size = document.getElementById("size").value;
    localStorage.setItem("size", size);

    const personalOption = document.querySelector('input[name="personal"]:checked');
    const personal = personalOption ? personalOption.value : null;
    localStorage.setItem("personal", personal);

    const flaws = document.getElementById("flaws").value;
    localStorage.setItem("flaws", flaws);

    const splits = document.getElementById("splits").value;
    localStorage.setItem("splits", splits);

    const annotationOption = document.querySelector('input[name="annotation"]:checked');
    const annotation = annotationOption ? annotationOption.value : null;
    localStorage.setItem("annotation", annotation);

    const collection = document.getElementById("collection").value;
    localStorage.setItem("collection", collection);

    const format = document.getElementById("format").value;
    localStorage.setItem("format", format);

    const languages = document.getElementById("languages").value;
    localStorage.setItem("languages", languages);

    const doi = document.getElementById("doi").value;
    localStorage.setItem("doi", doi);

    const licence = document.getElementById("licence").value;
    localStorage.setItem("licence", licence);

    const update = document.getElementById("update").value;
    localStorage.setItem("update", update);

    window.location.href = nextPage;


}

function saveText3(nextPage) {

    const maintainedOption = document.querySelector('input[name="maintained"]:checked');
    const maintained = maintainedOption ? maintainedOption.value : null;
    localStorage.setItem("maintained", maintained);

    const Uses = document.getElementById("Uses").value;
    localStorage.setItem("Uses", Uses);

    const unsafe = document.getElementById("unsafe").value;
    localStorage.setItem("unsafe", unsafe);

    const bias = document.getElementById("bias").value;
    localStorage.setItem("bias", bias);

    const social = document.getElementById("social").value;
    localStorage.setItem("social", social);

    const cite = document.getElementById("cite").value;
    localStorage.setItem("cite", cite);

    const further = document.getElementById("further").value;
    localStorage.setItem("further", further);

    window.location.href = nextPage;

}



function displayLocalStorageData(key, targetElementId) {
    var storedData = localStorage.getItem(key);
    var targetElement = document.getElementById(targetElementId);

    if (storedData !== null && targetElement !== null) {
        targetElement.innerHTML = "<p>" + storedData + "</p>";
    } else {
        console.error("Key not found or target element not found:", key, targetElementId);
    }
}

function displayMultipleKeys(keysArray) {
    keysArray.forEach(function (keyInfo) {
        displayLocalStorageData(keyInfo.key, keyInfo.targetElementId);
    });
}

window.onload = function () {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    if (savedEmail && savedPassword) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('password').value = savedPassword;
        rememberMeCheckbox.checked = true;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    function login() {
        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMeCheckbox = document.getElementById('remeberMeCheckbox');

        // Check if email and password are not blank
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return; // Stop execution if fields are blank
        }


        // Check if "Remember Me" is checked
        if (rememberMeCheckbox.checked) {
            // Save credentials to localStorage
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', password);
            var credentialsSaved = true;

        } else {
            // Clear saved credentials
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
            var credentialsSaved = false;

        }


        // For demonstration purposes, alert the user with the entered credentials
   
        alert(`Login successful!\nEmail: ${email}\nPassword: ${password}\nCredentials Saved: ${credentialsSaved ? 'Yes' : 'No'}`);

        window.location.href = 'home.html';

    }

    window.login = login


});

function navButton(page){
    window.location.href = page;
}

function continueAsGuest() {
    // Set the window location to home.html
    window.location.href = 'home.html';
}

function register() {
    // Set the window location to home.html
    window.location.href = 'register.html';
}

function showExtenstion() {
    var additionalElement = document.getElementById('popUp');

    var option1 = document.getElementById('publicly').checked;
    var option2 = document.getElementById('on_demand').checked;
    var option3 = document.getElementById('Private').checked;

    if (option1) {
        additionalElement.style.display = "block"
    }
    else {
        additionalElement.style.display = 'none';
    }

}