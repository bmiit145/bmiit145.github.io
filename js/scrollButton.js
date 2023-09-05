// Function to scroll the page down
function scrollDown() {
    // window.scrollBy(0, window.innerHeight);
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// Function to show/hide the scroll button based on scroll position
function toggleScrollButton() {
    var scrollButton = document.getElementById("scrollButton");
    if (document.documentElement.scrollTop === 0) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Add a scroll event listener to toggle the button
window.addEventListener("scroll", toggleScrollButton);

// Initially check the scroll position to determine whether to show the button
toggleScrollButton();

