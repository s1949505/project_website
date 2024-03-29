
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
    var name = 'Guest'
    localStorage.setItem("user", name)

}

function register() {
    // Set the window location to home.html
    window.location.href = 'register.html';
}

function showExtenstion(display, popupID, placeholder) {

    var additionalElement = document.getElementById(popupID);

    var textarea = additionalElement.querySelector('.popupTextArea');
    textarea.placeholder = placeholder;

    // Display the additional element
    additionalElement.style.display = 'block';

    if (display=='hide'){
        additionalElement.style.display = 'none';
    }



}

function validatePassword(){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;


    var hasNumber = /\d/.test(password);
    var validLength = password.length > 7;
    var noBlanks = !(email.trim() === '' && name.trim() === '' && dob.trim() === '')

 

    if (password === confirmPassword && hasNumber && validLength && noBlanks) {
        alert('Account successfuly created');
        loggedIn = true
        window.location.href ='home.html'
        localStorage.setItem("user", JSON.stringify(name))
    } else if(!noBlanks){
            alert('All fields must be completed to create an account.')
    }else{
        var alertMessage = 'Passwords ';
        alertMessage += (password !== confirmPassword) ? 'do not match. ' : '';
        alertMessage += (!hasNumber) ? 'must contain at least one number. ' : '';
        alertMessage += (!validLength) ? 'must be over 8 characters long. ' : '';
        alert(alertMessage) 
    }
}




function toggleEditMode() {
    var bio = document.getElementById('bio');
    var links = document.getElementById('links');
    var name = document.getElementById('name');
    var editButton = document.getElementById('editButton');
    var saveButton = document.getElementById('saveButton');

    if (editButton.textContent === 'Edit Information') {
        // Save the current content as data-* attributes
        bio.setAttribute('data-original-content', bio.textContent);
        links.setAttribute('data-original-content', links.textContent);
        name.setAttribute('data-original-content', name.textContent);

        // Make the content editable
        bio.contentEditable = true;
        links.contentEditable = true;
        name.contentEditable = true;

        // Change the button text
        editButton.textContent = 'Cancel';
        saveButton.style.display = 'block';
    } else {
        // Exit edit mode
        bio.contentEditable = false;
        links.contentEditable = false;
        name.contentEditable = false;

        // Reset content if it was empty
        if (bio.textContent.trim() === '') {
            bio.textContent = bio.getAttribute('data-original-content');
        }
        if (links.textContent.trim() === '') {
            links.textContent = links.getAttribute('data-original-content');
        }
        if (name.textContent.trim() === '') {
            name.textContent = name.getAttribute('data-original-content');
        }

        // Change the button text
        editButton.textContent = 'Edit Information';
        saveButton.style.display = 'none';
    }
}

function saveInfo() {
    var editedBio = document.getElementById('bio').textContent;
    var editedLinks = document.getElementById('links').textContent;
    var editedName = document.getElementById('name').textContent;

    // Save the information to localStorage
    localStorage.setItem('bio', editedBio);
    localStorage.setItem('links', editedLinks);
    localStorage.setItem('user', editedName);

    // Display success message
    alert('Information has been updated successfully');

    toggleEditMode();
}

function saveToAccount() {
    // Retrieve values from local storage
    var datasetName = localStorage.getItem('DatasetName') || '';
    var user = localStorage.getItem('user') || '';

    // Generate a unique identifier
    var identifier = user + '_' + datasetName.replace(/\s/g, '_');

    // Save the identifier in local storage
    localStorage.setItem('currentIdentifier', identifier);

    // Create a new key in local storage using the generated identifier
    var storageKey = 'data_' + identifier;

    // Store information from keysArray under the new key
    var storedData = {};
    for (var i = 0; i < keysArray.length; i++) {
        var item = keysArray[i];
        var element = document.getElementById(item.targetElementId);
        var text = element ? element.innerText : 'null';

        // Store information in local storage
        localStorage.setItem(storageKey + '_' + item.key, text);

        // Store information in the storedData object
        storedData[item.key] = text;
    }

    // Save the identifier in a library (you can use an array for simplicity)
    var library = JSON.parse(localStorage.getItem('library')) || [];
    library.push({ identifier: identifier, datasetName: datasetName, user: user });

    // Save the updated library in local storage
    localStorage.setItem('library', JSON.stringify(library));

    // Redirect to the complete.html page
    window.location.href = 'complete.html?identifier=' + encodeURIComponent(identifier);
}
