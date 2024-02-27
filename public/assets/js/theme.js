function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  const socialElement = document.querySelector(".home__social");
  if (socialElement) {
    socialElement.classList.toggle("dark-theme");
  }
  const isDarkTheme = body.classList.contains("dark-theme");
  document.documentElement.style.setProperty("--primary-color", isDarkTheme ? "var(--primary-color-dark)" : "var(--primary-color-light)");
  document.documentElement.style.setProperty("--secondary-color", isDarkTheme ? "var(--secondary-color-dark)" : "var(--secondary-color-light)");
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}
function changeIcon() {
  var button = document.getElementById('theme-button');
  var icon = document.getElementById('theme-icon');

  if (icon.classList.contains('bxs-sun')) {
      icon.classList.remove('bxs-sun');
      icon.classList.add('bxs-moon');

  } else {
      icon.classList.remove('bxs-moon');
      icon.classList.add('bxs-sun');

  }
}
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", function() {
  toggleTheme();
  changeIcon()
});
document.addEventListener('DOMContentLoaded', function() {
  var theme = localStorage.getItem('theme');
  if (theme) {
    if (theme === 'dark') {
        // Ativa o tema escuro
        document.body.classList.add("dark-theme");
        if (document.querySelector(".home__social")) {
            document.querySelector(".home__social").classList.add("dark-theme");
        }
        document.documentElement.style.setProperty("--primary-color", "var(--primary-color-dark)");
        document.documentElement.style.setProperty("--secondary-color", "var(--secondary-color-dark)");
        document.getElementById('theme-icon').classList.remove('bxs-sun');
        document.getElementById('theme-icon').classList.add('bxs-moon');
    }
}
  changeIcon();
});
