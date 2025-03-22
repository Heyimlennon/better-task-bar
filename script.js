document.addEventListener("DOMContentLoaded", () => {
    // Handle settings button click
    document.querySelector(".settings-btn").addEventListener("click", () => {
        alert("Settings feature coming soon!");
    });
    
    // Handle notifications button click
    document.querySelector(".notification-btn").addEventListener("click", () => {
        alert("No new notifications.");
    });
    
    // Handle start button click
    document.querySelector(".start-btn").addEventListener("click", () => {
        alert("Start Menu feature coming soon!");
    });

    // Handle search bar input
    document.querySelector(".search-bar").addEventListener("input", (e) => {
        console.log("Searching for: ", e.target.value);
    });

    // Handle comment submission
    document.getElementById("comment-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("comment-name").value;
        const text = document.getElementById("comment-text").value;
        if (name && text) {
            addComment(name, text);
            document.getElementById("comment-name").value = "";
            document.getElementById("comment-text").value = "";
        }
    });

    function addComment(name, text) {
        const commentSection = document.getElementById("comments-section");
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<strong>${name}:</strong> ${text}`;
        commentSection.appendChild(commentDiv);
    }

    // Toggle dark mode
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.innerText = "🌙 Dark Mode";
    toggleDarkMode.classList.add("dark-mode-btn");
    document.body.appendChild(toggleDarkMode);
    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Save comments to local storage
    function saveComments() {
        const comments = document.getElementById("comments-section").innerHTML;
        localStorage.setItem("comments", comments);
    }

    function loadComments() {
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            document.getElementById("comments-section").innerHTML = savedComments;
        }
    }
    loadComments();

    document.getElementById("comment-form").addEventListener("submit", () => {
        saveComments();
    });

    // Clear comments button
    const clearComments = document.createElement("button");
    clearComments.innerText = "🗑 Clear Comments";
    clearComments.classList.add("clear-comments-btn");
    document.getElementById("comments-section").appendChild(clearComments);
    clearComments.addEventListener("click", () => {
        document.getElementById("comments-section").innerHTML = "";
        localStorage.removeItem("comments");
    });
});
