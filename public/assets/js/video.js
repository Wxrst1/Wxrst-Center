// Seleciona todos os elementos do jogo
const games = document.querySelectorAll('.game');
const gameVideos = {
  'rocket': [
      {video: 'Snaptik.app_7183722081433947398.mp4', link: 'https://www.tiktok.com/@wxrst._/video/7183722081433947398'},
      {video: 'rocket2.mp4', link: 'https://link2.com'},
      {video: 'rocket3.mp4', link: 'https://link3.com'}
  ],
  'fortnite': [
      {video: 'fortnite1.mp4', link: 'https://link1.com'},
      {video: 'fortnite2.mp4', link: 'https://link2.com'}
  ],
  'csgo': [
      {video: 'csgo.mp4', link: 'https://link1.com'}
  ]
  // adicione mais jogos e vídeos conforme necessário
};

// Função para lidar com o clique no jogo Rocket
function handleRocketClick() {
  displayGameVideos('rocket');
}

// Função para lidar com o clique no jogo Fortnite
function handleFortniteClick() {
  displayGameVideos('fortnite');
}

// Função para lidar com o clique no jogo CSGO
function handleCsgoClick() {
  displayGameVideos('csgo');
}

// Função para exibir os vídeos de um jogo
function displayGameVideos(gameName) {
  // Obtém o contêiner do clip
  const clipContainer = document.getElementById('clip-container');

  // Limpa o contêiner do clip
  clipContainer.innerHTML = '';

  // Obtém a lista de vídeos para o jogo selecionado
  const videos = gameVideos[gameName];

  // Adiciona cada vídeo ao contêiner do clip
  videos.forEach((video, index) => {
      // Cria um novo ID para cada vídeo
      const videoId = `myVideo${index + 1}`;

      // Adiciona o vídeo ao contêiner do clip
      clipContainer.innerHTML += `
          <div class="clip-card">
              <video id="${videoId}" class="clip-img">
                  <source src="assets/videos/${video.video}" type="video/mp4">
              </video>
              <div class="clip-details">
                  <h3></h3>
                  <p style="display: inline-block;">
                      <span class="badge-up">Uploaded</span><br>
                      Game: <span><img src="assets/img/icons8-${gameName}-48.png" class="imgRock" alt="${gameName}"></span>
                  </p>
              </div>
              <a href="${video.link}" target="_blank" class="watch">Watch on <i class='bx bxl-tiktok' ></i></a>
              <div class="1">
                  <span class="soon-text"></span>
              </div>
          </div>
      `;

      // Cria uma nova instância do Plyr para o vídeo
      const player = new Plyr(`#${videoId}`);
  });
}

// Adiciona um ouvinte de evento de clique a cada jogo
games.forEach(game => {
    game.addEventListener('click', () => {
        // Obtém o nome do jogo
        const gameName = game.getAttribute('data-game');

        // Chama a função correspondente com base no nome do jogo
        switch (gameName) {
            case 'rocket':
                handleRocketClick();
                break;
            case 'fortnite':
                handleFortniteClick();
                break;
            case 'csgo':
                handleCsgoClick();
                break;
            // Adicione mais casos conforme necessário
        }
    });
});

// Seleciona todos os elementos do jogo
const game2s = document.querySelectorAll('.game');

// Adiciona um ouvinte de evento de clique a cada jogo
games.forEach(game => {
    game.addEventListener('click', () => {
        // Obtém o nome do jogo
        const gameName = game.getAttribute('data-game');

        // Redireciona para a página de clipes do jogo (altere isso para o URL correto)
        window.location.href = `https://seusite.com/clips/${gameName}`;
    });
});
