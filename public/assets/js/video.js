
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

};


function displayGameVideos(gameName) {

    const clipContainer = document.querySelector(`.${gameName}`);
  
    
    clipContainer.innerHTML = '';
  
 
    const videos = gameVideos[gameName];
  

    videos.forEach((video, index) => {
    
        const videoId = `${gameName}Video${index + 1}`;
 
        clipContainer.innerHTML += `
            <div class="clip-card">
                <video id="${videoId}" class="clip-img" controls>
                    <source src="assets/videos/${video.video}" type="video/mp4">
                    Seu navegador não suporta o elemento de vídeo.
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
  

        const player = new Plyr(`#${videoId}`);
    });
  }
  
 
  window.onload = function() {
 
    displayGameVideos('rocket');
    displayGameVideos('fortnite');
    displayGameVideos('csgo');

  };
  