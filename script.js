// Function to show a simple menu when the Start button is clicked
function showMenu() {
    alert("Welcome to the Better Task Bar Menu!");
}

// Function to save the search input to localStorage
function saveSearchInput() {
    const searchInput = document.getElementById("search-bar").value;
    localStorage.setItem("searchInput", searchInput);
}

// Function to load saved search input (if any)
window.onload = function() {
    const savedSearch = localStorage.getItem("searchInput");
    if (savedSearch) {
        document.getElementById("search-bar").value = savedSearch;
    }
}

// Function to toggle a settings panel or modal
function toggleSettings() {
    alert("Settings menu will appear soon.");
}

// Function to show a notification
function showNotification() {
    alert("You have a new notification!");
}
