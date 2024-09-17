const titleElement = document.getElementById('title');
const titles = ['Web Developer', 'UI/UX Designer', 'YouTuber'];
const colors = ['#ef233c', `#7209b7`, `#4361ee`]; // Adjust colors as needed
let currentTitleIndex = 0;

function changeTitle() {
    // Get the title text within the h1 element
    const titleText = titleElement.textContent.split(' ')[3]; // Assuming "Web Developer" is the fourth word

    // Find the index of the current title
    const currentIndex = titles.indexOf(titleText);

    // Set the new title and color
    titleElement.textContent = `I'm a professional ${titles[currentTitleIndex]}.`;
    titleElement.style.color = colors[currentTitleIndex];

    // Update the current title index
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}

// Call the function immediately to set the initial title
changeTitle();

// Set up the interval to repeat the change every 3 seconds
const intervalId = setInterval(changeTitle, 3000);

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('nav-open'); // For toggling the hamburger into 'X' shape
});


