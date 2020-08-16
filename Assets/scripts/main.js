/* SHOW MENU SCREEN */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=> {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/* NAVIGATION MENU - ACTIVE/REMOVE */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Shows Active Link
    navLink.forEach(ntimes => ntimes.classList.remove('active'))
    this.classList.add('active')

   // Remove Menu Mobile Response
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(ntimes => ntimes.addEventListener('click', linkAction))

/* --- SCROLL ANIMATION --- */
const sr =ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true

})

/* SCROLL HOME SECTION */

sr.reveal('.home-title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home_img', {delay: 400})
sr.reveal('.home_social-icon', {interval: 200})

/* SCROLL ABOUT SECTION */

sr.reveal('.about_img', {})
sr.reveal('.about-subtitle', {delay: 200})
sr.reveal('.about-text', {delay: 400})

/* SCROLL SKILLS SECTION */

sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_text', {delay: 200})
sr.reveal('.skills_info', {interval: 200})
sr.reveal('.skills_img', {delay: 400})

/* SCROLL PORTFOLIO SECTIPN */

sr.reveal('.portfolio_img', {interval: 200})

/*SCROLL CONTACT SECTION  */

sr.reveal('.contact_input', {interval: 200})