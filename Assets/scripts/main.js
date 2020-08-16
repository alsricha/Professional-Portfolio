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