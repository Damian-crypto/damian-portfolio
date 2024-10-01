/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
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

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

// Vue app begins
const { createApp, ref } = Vue

createApp({
    setup() {
        const projects = [
            {
                "name": "ControlPC",
                "img": "assets/img/work1.png",
                "link": "https://github.com/Damian-crypto/ControlPc",
                "description": "A simple client-server model for remote PC control involves a client sending commands (like mouse clicks or keystrokes) to a server running on a target PC, enabling remote management, with communication handled over TCP/IP for real-time control.",
                "techstack": ["react-js", "python-flask"]
            },
            {
                "name": "GraphViz",
                "img": "assets/img/work2.png",
                "link": "https://github.com/Damian-crypto/graph-visualizer",
                "description": "A simple graph visualizer using Vis.js allows users to create interactive, dynamic network graphs, displaying nodes and edges in a visually appealing way, with features like zoom, drag, and customized styling for enhanced data exploration.",
                "techstack": ["html", "javascript"]
            },
            {
                "name": "Zeus Game Engine",
                "img": "assets/img/work3.png",
                "link": "https://github.com/Damian-crypto/Zeus",
                "description": "Zeus is a lightweight simple game engine built for learning purposes, featuring graphics programming with OpenGL and Vulkan, along with integrated audio systems, physics, animation, and networking capabilities for a comprehensive game development experience.",
                "techstack": ["c++", "opengl"]
            },
        ];

        const skills = [
            {
                "name": "Spring Boot",
                "relativity": 60,
                "icon": "spring-boot"
            },
            {
                "name": "Flask",
                "relativity": 100,
                "icon": "python-flask"
            },
            {
                "name": "React",
                "relativity": 100,
                "icon": "react-js"
            },
        ];

        const tutorials = [
            {
                "title": "CORS",
                "url": "https://medium.com/@bdamianchamel/cors-6322598e6436",
                "banner": "https://miro.medium.com/v2/resize:fit:700/1*t4eTNhqji8IBr8YP7wLmfg.png",
                "author": "damian-chamel"
            },
            {
                "title": "Web Socket — Spring Boot",
                "url": "https://medium.com/@bdamianchamel/web-socket-spring-boot-c7985aff9d39",
                "banner": "https://miro.medium.com/v2/resize:fit:700/1*IoZm9qFKEh2_n5PnCi79BA.png",
                "author": "damian-chamel"
            },
            {
                "title": "Relationships in Spring Data JPA",
                "url": "https://medium.com/@bdamianchamel/relationships-in-spring-data-jpa-7c5ceaf05f29",
                "banner": "https://miro.medium.com/v2/resize:fit:607/1*b0q9Vrulx2SzMNzKyoBjBA.png",
                "author": "damian-chamel"
            },
            {
                "title": "Java Agents",
                "url": "https://medium.com/@bdamianchamel/java-agents-b3f3addd5d3e",
                "banner": "https://miro.medium.com/v2/resize:fit:700/1*k6LycMTYWlLRWHf3TAFJdw.jpeg",
                "author": "damian-chamel"
            },
        ];

        const certifications = [
            {
                "title": "Behaviour Driven Python with pytest-bdd",
                "url": "https://testautomationu.applitools.com/certificate/?id=8ff7b33e",
                "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-8ff7b33e.png?alt=media&token=791be8fd-4c46-44d7-8d7d-9ea9ce2772c9",
                "issue": "Test Automation University"
            },
            {
                "title": "API Test Automation with Postman",
                "url": "https://testautomationu.applitools.com/certificate/?id=667c4472",
                "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-667c4472.png?alt=media&token=46dc0241-0343-4a4d-b0b3-d9f941580a25",
                "issue": "Test Automation University"
            },
            {
                "title": "Test Automation in DevOps",
                "url": "https://testautomationu.applitools.com/certificate/?id=2dac171a",
                "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-2dac171a.png?alt=media&token=636df1a0-5c8d-4a34-960f-caa11e19f77e",
                "issue": "Test Automation University"
            },
            {
                "title": "NDG Linux Essentials",
                "url": "https://www.netacad.com/certificates?issuanceId=bcdadc32-9e1a-4b1b-bf57-c7d2f630f85c",
                "banner": "./assets/img/linux_cert.png",
                "issue": "Cisco Networking Academy"
            },
            {
                "title": "AI/ML Engineering - Stage 1",
                "url": "https://code.sliit.org/certificates/gdpnv1tb1a",
                "banner": "https://cdn.filestackcontent.com/0GjYl1LeSdeBNP6cF6SS?policy=eyJjYWxsIjpbInBpY2siLCJzdG9yZSIsInJlYWQiLCJjb252ZXJ0Iiwid3JpdGUiLCJzdGF0IiwicmVtb3ZlIl0sImV4cGlyeSI6MTcyNzY3MjEyMywicGF0aCI6IndlbGNvbWUtZXhwZXJpZW5jZVxcLy4qIn0%3D&signature=6d43be000160d2e2eb60b1b2a1110bba2a15ead2f2ffabec804afb161e2bd62c",
                "issue": "CODE - SLIIT"
            },
            {
                "title": "AI/ML Engineering - Stage 2",
                "url": "https://code.sliit.org/certificates/krpid1fwhr",
                "banner": "https://cdn.filestackcontent.com/olrhXZ6IR4Sm2Ld26xuF?policy=eyJjYWxsIjpbInBpY2siLCJzdG9yZSIsInJlYWQiLCJjb252ZXJ0Iiwid3JpdGUiLCJzdGF0IiwicmVtb3ZlIl0sImV4cGlyeSI6MTcyNzY3MjI2MywicGF0aCI6IndlbGNvbWUtZXhwZXJpZW5jZVxcLy4qIn0%3D&signature=c0f70ba3ab8657f6d4e3b1394a9a7a21785d93f7452c758ccb2fa4ae854f6cb3",
                "issue": "CODE - SLIIT"
            },
            {
                "title": "Machine Learning with Python",
                "url": "https://www.freecodecamp.org/certification/fccac4153e6-9908-4afc-bab9-40c63b144e06/machine-learning-with-python-v7",
                "banner": "./assets/img/ml_with_python.png",
                "issue": "freeCodeCamp"
            },
            {
                "title": "Data Analysis with Python",
                "url": "https://www.freecodecamp.org/certification/fccac4153e6-9908-4afc-bab9-40c63b144e06/data-analysis-with-python-v7",
                "banner": "./assets/img/data_analysis_with_python.png",
                "issue": "freeCodeCamp"
            },
        ];

        return {
            projects,
            skills,
            tutorials,
            certifications
        }
    }
}).mount('#app')
// Vue app ends

// const horizontalContainers = document.querySelectorAll('.horizontal__container');
// for (const container of horizontalContainers) {
//     let isDragging = false;
//     let startX;
//     let scrollLeft;

//     container.addEventListener('mousedown', (e) => {
//         e.preventDefault();
//         isDragging = true;
//         container.classList.add('active');
//         startX = e.pageX - container.offsetLeft;
//         scrollLeft = container.scrollLeft;
//     });

//     container.addEventListener('mouseleave', () => {
//         isDragging = false;
//         container.classList.remove('active');
//     });

//     container.addEventListener('mouseup', () => {
//         isDragging = false;
//         container.classList.remove('active');
//     });

//     container.addEventListener('mousemove', (e) => {
//         if (!isDragging) return; // Stop the function if not dragging
//         e.preventDefault(); // Prevent text selection
//         const x = e.pageX - container.offsetLeft;
//         const walk = (x - startX) * 2; // Adjust scroll speed
//         container.scrollLeft = scrollLeft - walk;
//     });    
// }
const carouselContainers = document.querySelectorAll('.carousel-container');
for (const carouselContainer of carouselContainers) {
    const carousel = carouselContainer.querySelector('.carousel');
    const slides = carouselContainer.querySelectorAll('.slide');
    const prevButton = carouselContainer.querySelector('.prev');
    const nextButton = carouselContainer.querySelector('.next');
    let currentIndex = 0;
    const slidesToShow = 3;
    
    function showSlide(index) {
        const totalSlides = slides.length;
        if (index < 0) index = totalSlides - slidesToShow;
        if (index > totalSlides - slidesToShow) index = 0;
        carousel.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
        currentIndex = index;
    }
    
    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
    
    // Auto-slide every 3 seconds
    setInterval(() => showSlide(currentIndex + 1), 3000);
}
