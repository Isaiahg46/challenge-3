 // TODO: Create a variable that selects the form element
const form = document.getElementById("loginForm");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
/*function formSubmission() {*/
    let username = document.getElementById("username");
    let title = document.getElementById("title");
    let content = document.getElementById("content");
    let error = document.getElementById("error");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let redirectURL = '///c%3A/Users/isaia/desktop/UCI-VIRT-FSF-PT-09-2024-U-LOLC/04-Web-APIs/02-Challenge/Develop/blog.html';

        const redirectPage = function (url) {
         redirectURL = url;
         location.assign(url);
    };    

    const formData = {
        username: form.elements['username'].value,
        title: form.elements['title'].value,
        content: form.elements['content'].value
    };

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('formData', formDataJSON);

    if (username.value == "" || title.value == "" || content.value == "") {
         error.innerHTML = "Please complete the form."
    } else {
        redirectPage();
    }
    
 
    }
    
);


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
/*form.addEventListener("submit", (e) => {
    e.preventDefault();
    formSubmission();
});*/