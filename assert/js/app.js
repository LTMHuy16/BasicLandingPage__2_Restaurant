/* ================= SHOW MENU ==================== */
/* ================================================ */
const showMenu =  (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if(toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

/* ============== REMOVE MENU MOBILE =============== */
/* ================================================ */
function removeMenuShow(navLink, navId) {
  const navLinks = document.querySelectorAll(navLink);
  const navMenu = document.getElementById(navId);

  navLinks.forEach( n => {
    n.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    })
  });
}

removeMenuShow('.nav__link', 'nav-menu');

/* ========== SCROLL SECTION ACTIVE LINK =========== */
/* ================================================ */
const sections = document.querySelectorAll("section");

function scrollActiveSection () {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 10,
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
    }
  })
}

window.addEventListener("scroll", scrollActiveSection);

/* ======= CHANGE BACKGROUND COLOR HEADER ========== */
/* ================================================ */
function scrollHeader() {
  const nav = document.getElementById("header");
  // 
  if(this.scrollY >= 200)
    nav.classList.add("scroll-header");
  else
    nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


/* ============= SHOW SCROLL TO TOP ================ */
/* ================================================ */
function scrollToTop() {
  const scrollBtn = document.getElementById("scroll-top");
  // 
  if(this.scrollY >= 560)
    scrollBtn.classList.add("scroll-top");
  else
    scrollBtn.classList.remove("scroll-top");
}

window.addEventListener("scroll", scrollToTop);

/* ============== DARK LIGHT THEME ================= */
/* ================================================ */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Get previous selected topic
const selectedTheme = localStorage.getItem('selected-theme') ;
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
  

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  document.body.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //store in localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/* =========== SCROLL REVEAL ANIMATION ============= */
/* ================================================ */
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true 
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
  interval: 100
})