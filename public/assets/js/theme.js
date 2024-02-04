// Função para alternar o tema
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  const socialElement = document.querySelector(".home__social");
  if (socialElement) {
    socialElement.classList.toggle("dark-theme");
  }
  // Atualiza as cores atuais com base no tema atual
  const isDarkTheme = body.classList.contains("dark-theme");
  document.documentElement.style.setProperty("--primary-color", isDarkTheme ? "var(--primary-color-dark)" : "var(--primary-color-light)");
  document.documentElement.style.setProperty("--secondary-color", isDarkTheme ? "var(--secondary-color-dark)" : "var(--secondary-color-light)");

  // Salva a preferência de tema no localStorage
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Função para mudar o ícone
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
// Evento de clique no botão de alternar o tema
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", function() {
  toggleTheme();
  changeIcon()
});

// Quando a página é carregada...
document.addEventListener('DOMContentLoaded', function() {
  // Obtém a preferência de tema do localStorage
  var theme = localStorage.getItem('theme');

  if (theme) {
    // Se o tema salvo for 'dark'...
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
  // Chama a função changeIcon para garantir que o ícone esteja correto
  changeIcon();
});
