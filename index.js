// gsap is used to animate the nav bar
gsap.from(".nav2 h2", {
  x: 100,
  duration: 3,
  opacity: 0,
  delay: 0.5,
  stagger: 1,
});

//lenis js for the scrolling
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


// // Icon functionality...................................
// Wait for DOM to load
 document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("icon");
    const sideMenu = document.getElementById("sideMenu");

    icon.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
    });
  });
  

  //h2 click then maintian all the section with a specific gap
  const homePage = document.getElementById("home");
  const aboutPage = document.getElementById("about");
  const skillPage = document.getElementById("skills");
  const projectPage = document.getElementById("projects");
  const contactPage = document.getElementById("contact");

  const navTags = document.querySelectorAll(".nav-tag");
  navTags.forEach((tag) => {
    tag.addEventListener("click", () => {
       homePage.style.marginTop = "10vh";
       aboutPage.style.marginTop = "300px";
    })
  });

//Form related all the functionality.................

function data() {
  const form = document.querySelector("form");
  let name = document.querySelector("#name").value;
  let mail = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;
  let formBtn = document.querySelector(".formBtn");




//ai js
// =========================
// MOBILE NAV TOGGLE
// =========================
const icon = document.getElementById('icon');
const nav2 = document.querySelector('.nav2');

icon.addEventListener('click', () => {
  nav2.classList.toggle('show-nav2');
  icon.classList.toggle('fa-x'); // toggle hamburger X
});

// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
    if(nav2.classList.contains('active')){
      nav2.classList.remove('active');
      icon.classList.remove('fa-x');
    }
  });
});

// =========================
// GSAP ANIMATIONS
// =========================
gsap.from('.section1 .left', {opacity: 0, x: -100, duration: 1, ease: 'power2.out'});
gsap.from('.section1 .right', {opacity: 0, x: 100, duration: 1, ease: 'power2.out'});

gsap.utils.toArray('main, .about-page, .skills-page, .projects-page, .contact-page').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// =========================
// SWIPER SLIDER (PROJECTS)
// =========================
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// =========================
// FORM VALIDATION
// =========================
function data() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('number').value.trim();

   if (name == "" || mail == "" || number == "") {
    alert("All fields are mandatory");
    return false;
  } else if (number.length < 10 || number.length > 10) {
    alert("please enter valid number of 10 digits");
    return false;
  } else if (isNaN(number)) {
    alert("only numbers arwe alllowed");
    return false;
  } else if (!mail.includes("@") || !mail.includes("gmail.com")) {
    alert("please enter a valid email");
    return false;
  } else {
    true;
  }

  formBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    name = "";
    email = "";
    number = ""; 
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", mail);
    // localStorage.setItem("number", number);
  });

  alert("Thank You! .Form Successfully Submitted")
}
}
// =========================
// BUTTON NEON HOVER EFFECT
// =========================
const buttons = document.querySelectorAll('.resume, .work, .project-btn, .formBtn, .button');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {boxShadow: '0 0 15px #00f3ff, 0 0 25px #00f3ff', duration: 0.3});
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {boxShadow: '0 0 0px #00f3ff', duration: 0.3});
  });
})




///THIS IS FOR BUTTON PROJECT 10+ IN PAGE

const projectButton = document.querySelector(".projects-page .button");
let num = 0;
 let timer = setInterval(() => {
       projectButton.innerText = num + "+ Proejcts";
        if (num === 20) {
          clearInterval(timer); // 20 पर रुक जाए
        }
        num++;
      }, 100);
