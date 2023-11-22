/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
     
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
      }

      if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
        });
      }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('scroll-header')
                     : header.classList.add('scroll-header')
}
window.addEventListener('scroll',shadowHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact_form'),  
contactMessage = document.getElementById('contact-message')

console.log(contactForm);
const sendEmail = (e) =>{
  e.preventDefault()

  // serviceID - templateID - #form - publicKey   password : samuelrajemailjs
  emailjs.sendForm('service_ttqvyqm','template_3ft1xz9','#contact_form','UF0Y2fLIP7pws-Ugf')
  .then(()=>{
    // Show sent message
    contactMessage.textContent = 'Message sent succesfully ✅'

    // Remove message after five seconds
    setTimeout(()=>{
      contactMessage.textContent = ''
    }, 5000)

    // Clear input fields
    contactForm.reset()

  },()=>{

    // Show error message
    contactMessage.textContent = 'Message not sent (service error) ❌'

  })

}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')


const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById( 'theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the is if we activated or deactivated the Break
document.body.classList[selectedTheme ==='dark'? 'add':'remove'](darkTheme)

themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' :
'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme)
 themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that Ihe user chose
localStorage.setItem('selected-theme', getCurrentTheme ())
localStorage.setItem('selected-icon', getCurrentIcon ())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true // Animations repeat
})
  sr.reveal(`.home__perfil, .about__image, .contact__mail,.projects`, {origin: 'right'})
  sr.reveal( `.home__name, .home__info,
  .about__container, .about__info,
  .contact__social, .contact__data`, {origin:'left'})
  sr.reveal(`.services__card,.projects__card`,{interval: 100})
