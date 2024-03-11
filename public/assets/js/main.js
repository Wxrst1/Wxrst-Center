
//Speed Insights
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
//Web Analytics
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId, iconId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    icon = document.getElementById(iconId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
            icon.classList.toggle('bx-x'); // Adiciona ou remove a classe 'bx-x'
        })
    }

    // Fecha o menu quando se clica fora dele
    document.addEventListener('click', (e) => {
        if(e.target.closest(`#${navId}`) || e.target.closest(`#${toggleId}`)) {
            return;
        }
        if(nav.classList.contains('show')) {
            nav.classList.remove('show');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
            icon.style.transform = "rotate(0deg)";
        }
    });
}
showMenu('nav-toggle','nav-menu', 'menu-icon');




/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .goal__subtitle, goal__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.goal__data, .clips__img, .contact__input',{interval: 200}); 
sr.reveal('.clip, .section-title, .clip-container, .clip-card, .clip-img, .imgRock, .overlayR, .soon-text, .watch', {});
sr.reveal('.clip-card, .soon-text', {});
sr.reveal('.home__social-icon-tiktok, .home__social-icon-twitch, .home__social-icon-instagram, .home__social-icon-discord', {});



//Data Source
var data = {
    AppName: navigator.appName,
    AppVersion: navigator.appVersion,
    Platform: navigator.platform,
    Language: navigator.language,
    ScreenWidth: window.screen.width,
    ScreenHeight: window.screen.height,
    Referrer: document.referrer,
    AdditionalInfo: "This is some additional information to make your website even better!",
    UserAgent: navigator.userAgent,
    CookiesEnabled: navigator.cookieEnabled,
    Timestamp: new Date().toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'full' }),
    CurrentPage: window.location.href,
    NavigationType: window.performance.navigation.type,
    HardwareConcurrency: navigator.hardwareConcurrency
};

// Verifique se a API Geolocation está disponível e peça permissão ao usuário
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        data.latitude = position.coords.latitude;
        data.longitude = position.coords.longitude;
    });
}

// Verifique se a API Network Information está disponível
if ('connection' in navigator) {
    data.NetworkType = navigator.connection.effectiveType;
    data.NetworkDownlink = navigator.connection.downlink;
}

// Verifique se a API Battery Status está disponível
if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        data.batteryLevel = battery.level;
        data.batteryCharging = battery.charging;
    });
}



// Format the information for a Discord embed
var embed = {
    title: 'Browser Information',
    fields: Object.keys(data).map(key => ({ name: key, value: data[key].toString() }))
};

// Send the embed to the Discord webhook
fetch('https://discord.com/api/webhooks/1153295041754841219/eznHPePidZlbBWXPA7oSyTclu1MAdx39Ub2ZvhqIq479QjLp31rLUWy3wkJkodeQ_P0L', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        embeds: [embed]
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(data => {
    try {
        return JSON.parse(data);
    } catch (err) {
        console.log('Data is not JSON:', data);
        throw err;
    }
})
.catch((error) => {
    console.error('Error:', error);
});

/*===== PARALLAX  =====*/
var container = document.getElementById('container');
window.onmousemove = function(e) {
    var x = - e.clientX/5, 
    y = - e.clientY/5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}

/*===== THEME [DARK/LIGHT] =====*/
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
  
    // Save the theme in the local storage
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
  
  // Seleciona todos os cartões
const cards = document.querySelectorAll('.clip-card');

cards.forEach(card => {
    // Adiciona um ouvinte de eventos de clique a cada cartão
    card.addEventListener('click', (e) => {
        // Verifica se o overlay já está mostrando
        const overlayShowing = card.classList.contains('show-overlay');

        // Remove a classe 'show-overlay' de todos os cartões
        cards.forEach(card => card.classList.remove('show-overlay'));

        // Se o overlay não estava mostrando, adiciona a classe 'show-overlay'
        if (!overlayShowing) {
            card.classList.add('show-overlay');
        }

        // Previne o evento de clique se o overlay não estava mostrando
        if (!overlayShowing && e.target.tagName === 'A') {
            e.preventDefault();
        }
    });
});

       // Quando o conteúdo do site estiver totalmente carregado
       window.addEventListener('load', () => {
        // Esconde a tela de carregamento
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300); // Deve corresponder à duração da transição no CSS
    });


   