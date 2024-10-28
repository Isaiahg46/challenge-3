// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

/*const themeSwitcher = document.querySelector('#toggle');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
  // If mode is light, apply dark background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});*/


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(formData) {
  const lastPost = localStorage.getItem('formData');
    return data ? JSON.parse(lastPost) : null;
  }
   /* function savePost(username, title, content) {
      const posts = JSON.parse(localStorage.getItem('formData')) || [];
      const newPost = { username, title, content };
      posts.push(newPost);
      localStorage.setItem('formData', JSON.stringify(posts));
  };*

  function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('formData')) || [];
    const postsContainer = document.getElementById('postsContainer'); // Make sure you have a container in your HTML

    postsContainer.innerHTML = ''; // Clear previous posts
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>By: ${post.username}</p>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

window.onload = function() {
  displayPosts();
};*/



// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
/*function storeLocalStorage(newBlogPost) {
  // Step 1: Retrieve existing blog data from local storage
  let existingPosts = localStorage.getItem("formData");
  
  // Step 2: Parse the existing data into an object
  existingPosts = existingPosts ? JSON.parse(existingPosts) : [];
  
  // Step 3: Add the new blog post to the existing data
  existingPosts.push(newBlogPost);
  
  // Step 4: Convert the updated data back into a JSON string
  const updatedPosts = JSON.stringify(existingPosts);
  
  // Step 5: Save the updated string back to local storage
  localStorage.setItem("formData", updatedPosts);
};*/

function storeLocalStorage(formData, data) {
  const jsonData = JSON.stringify(data); // Convert the object to a JSON string
  localStorage.setItem(key, jsonData); // Store the JSON string in local storage
}

// ! Use the following function whenever you need to redirect to a different page

const back = document.getElementById('back');

back.addEventListener('click', function() {


  let redirectURL = 'file:///C:/Users/isaia/desktop/UCI-VIRT-FSF-PT-09-2024-U-LOLC/04-Web-APIs/02-Challenge/Develop/index.html';

  const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };
  redirectPage();
});
