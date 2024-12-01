document.getElementById('get-started-btn').addEventListener('click', () => {
  
  document.getElementById('welcome').style.display = 'none';


  document.getElementById('main-content').style.display = 'block';
});

document.getElementById('improve-btn').addEventListener('click', () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'style.css';
  document.head.appendChild(link);

  document.getElementById('improve-btn').style.display = 'none';

  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

function checkIfCSSLoaded() {
  const stylesheets = Array.from(document.styleSheets);
  const isCSSLoaded = stylesheets.some(sheet => sheet.href && sheet.href.includes('style.css'));

  if (isCSSLoaded) {
    document.getElementById('improve-btn').style.display = 'none';
  }
}

checkIfCSSLoaded();

function setActiveLink(event) {
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}

document.getElementById('home-link').addEventListener('click', setActiveLink);
document.getElementById('about-link').addEventListener('click', setActiveLink);
document.getElementById('projects-link').addEventListener('click', setActiveLink);
document.getElementById('skills-link').addEventListener('click', setActiveLink);
document.getElementById('contact-link').addEventListener('click', setActiveLink);

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const aboutImage = document.querySelector('.about-img img');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      aboutImage.classList.add('move');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

observer.observe(aboutImage); 


const homeImage = document.querySelector('.home-image img');

const homeImageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      homeImage.classList.add('move');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

homeImageObserver.observe(homeImage); 

document.getElementById('know-more-btn').addEventListener('click', (e) => {
  e.preventDefault(); 
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-down-btn').addEventListener('click', (e) => {
  e.preventDefault(); 
  document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});