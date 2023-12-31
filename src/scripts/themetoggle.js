// Check if the theme is stored in localStorage
let theme = localStorage.getItem("theme");

// If not, check the user's system preference
if (!theme) {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Set the theme in localStorage
localStorage.setItem("theme", theme);

// Add the theme as a custom attribute on the html element
document.documentElement.setAttribute('data-theme', theme);

document.addEventListener('astro:before-swap', () => {
  // Get the theme from localStorage
  theme = localStorage.getItem("theme");

  // Add the theme as a custom attribute on the html element
  document.documentElement.setAttribute('data-theme', theme);

  setTimeout(() => {
    // Set up the event listener for the theme toggle button
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        // Toggle the theme
        theme = document.documentElement.getAttribute('data-theme') === "dark" ? "light" : "dark";

        // Update the theme in localStorage
        localStorage.setItem("theme", theme);

        // Update the custom attribute
        document.documentElement.setAttribute('data-theme', theme);
      });
    }
  }, 0);
});