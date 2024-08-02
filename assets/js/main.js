/* menu */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


// showing the menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// hiding the menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//color slider
document.addEventListener('DOMContentLoaded', function() {
    const colorSlider = document.getElementById('colorSlider');
    colorSlider.addEventListener('input', function() {
        const hueValue = colorSlider.value;
        document.documentElement.style.setProperty('--hue-color', hueValue);
    });
});

// Toggle the visibility of the project GIF/video
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project__image');
    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            const video = image.nextElementSibling;
            if (video.style.display === 'none' || video.style.display === '') {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    });
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

  


/* main */
