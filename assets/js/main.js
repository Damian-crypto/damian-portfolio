/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 400,
});
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

// Vue app begins
const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const projects = [
      {
        name: 'QuizzyPals',
        img: 'assets/img/quizzy/1.png',
        ss: [
          'assets/img/quizzy/1.png',
          'assets/img/quizzy/2.png',
          'assets/img/quizzy/3.png',
          'assets/img/quizzy/4.png',
          'assets/img/quizzy/5.png',
          'assets/img/quizzy/6.png',
        ],
        link: 'https://github.com/Damian-crypto/Project-QuizzyPals',
        description:
          'Online realtime quiz based gaming platform for players to learn, entertain and collaborate with each',
        techstack: [
          'react-js',
          'express-js',
          'mongodb',
          'mocha-js',
          'selenium-ide',
        ],
      },
      {
        name: 'ControlPC',
        img: 'assets/img/work1.png',
        ss: [
          'assets/img/controlpc/1.jpg',
          'assets/img/controlpc/2.jpg',
          'assets/img/controlpc/3.jpg',
          'assets/img/controlpc/4.jpg',
          'assets/img/controlpc/5.jpg',
        ],
        link: 'https://github.com/Damian-crypto/ControlPc',
        description:
          'A simple client-server model for remote PC control involves a client sending commands (like mouse clicks or keystrokes) to a server running on a target PC, enabling remote management, with communication handled over TCP/IP for real-time control.',
        techstack: ['react-js', 'python-flask'],
      },
      {
        name: 'GraphViz',
        img: 'assets/img/work2.png',
        link: 'https://github.com/Damian-crypto/graph-visualizer',
        description:
          'A simple graph visualizer using Vis.js allows users to create interactive, dynamic network graphs, displaying nodes and edges in a visually appealing way, with features like zoom, drag, and customized styling for enhanced data exploration.',
        techstack: ['html', 'javascript'],
      },
      {
        name: 'Zeus Game Engine',
        img: 'assets/img/work3.png',
        link: 'https://github.com/Damian-crypto/Zeus',
        description:
          'Zeus is a lightweight simple game engine built for learning purposes, featuring graphics programming with OpenGL and Vulkan, along with integrated audio systems, physics, animation, and networking capabilities for a comprehensive game development experience.',
        techstack: ['c++', 'opengl'],
      },
      {
        name: 'Ad Remover',
        img: 'assets/img/work7.png',
        link: '',
        description:
          'Ad Remover is a simple chrome browser extension designed to block or remove intrusive ads while enhancing user browsing experience by keeping web pages clean and distraction-free.',
        techstack: ['javascript', 'chrome-api'],
      },
      {
        name: 'Decompiler Explorer',
        img: 'https://raw.githubusercontent.com/Damian-crypto/dcompiler-explorer/refs/heads/main/static/img.png',
        link: 'https://github.com/Damian-crypto/dcompiler-explorer',
        description:
          'Decompiler Explorer is a simple tool designed to reverse-engineer compiled binaries from C++, C, Java, and Python, allowing users to explore the underlying source code, analyze program structure, and gain insights into executable files within your local machine.',
        techstack: ['python', 'html', 'css'],
      },
    ];

    const skills = [
      {
        name: 'Flask',
        relativity: 100,
        icon: 'python-flask',
      },
      //   {
      //     name: 'MERN Stack',
      //     relativity: 60,
      //     icon: 'mern-stack',
      //   },
      {
        name: 'ReactJS',
        relativity: 90,
        icon: 'react-js',
      },
      {
        name: 'Spring Boot',
        relativity: 50,
        icon: 'spring-boot',
      },
      {
        name: 'MongoDB',
        relativity: 70,
        icon: 'mongodb-icon',
      },
      {
        name: 'MySQL',
        relativity: 90,
        icon: 'mysql-icon',
      },
      {
        name: 'GIT',
        relativity: 60,
        icon: 'git-icon',
      },
    ];

    const tutorials = [
      {
        title: 'CORS',
        url: 'https://medium.com/@bdamianchamel/cors-6322598e6436',
        banner:
          'https://miro.medium.com/v2/resize:fit:700/1*t4eTNhqji8IBr8YP7wLmfg.png',
        author: 'damian-chamel',
      },
      {
        title: 'Web Socket — Spring Boot',
        url: 'https://medium.com/@bdamianchamel/web-socket-spring-boot-c7985aff9d39',
        banner:
          'https://miro.medium.com/v2/resize:fit:700/1*IoZm9qFKEh2_n5PnCi79BA.png',
        author: 'damian-chamel',
      },
      {
        title: 'Relationships in Spring Data JPA',
        url: 'https://medium.com/@bdamianchamel/relationships-in-spring-data-jpa-7c5ceaf05f29',
        banner:
          'https://miro.medium.com/v2/resize:fit:607/1*b0q9Vrulx2SzMNzKyoBjBA.png',
        author: 'damian-chamel',
      },
      {
        title: 'Java Agents',
        url: 'https://medium.com/@bdamianchamel/java-agents-b3f3addd5d3e',
        banner:
          'https://miro.medium.com/v2/resize:fit:700/1*k6LycMTYWlLRWHf3TAFJdw.jpeg',
        author: 'damian-chamel',
      },
    ];

    const certifications = [
      {
        title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
        url: 'https://drive.google.com/file/d/1Qbojli3MiJAQyw3b2rbHemlRZi-BFW0K/view?usp=sharing',
        banner: './assets/img/oracle_oci.png',
        issuer: 'Oracle University',
      },
      {
        title: 'AI/ML Engineering - Stage 1',
        url: 'https://code.sliit.org/certificates/gdpnv1tb1a',
        banner: './assets/img/aiml_stage1.jpg',
        issuer: 'CODE - SLIIT',
      },
      {
        title: 'AI/ML Engineering - Stage 2',
        url: 'https://code.sliit.org/certificates/krpid1fwhr',
        banner: './assets/img/aiml_stage2.jpg',
        issuer: 'CODE - SLIIT',
      },
      {
        title: 'Machine Learning with Python',
        url: 'https://www.freecodecamp.org/certification/fccac4153e6-9908-4afc-bab9-40c63b144e06/machine-learning-with-python-v7',
        banner: './assets/img/ml_with_python.png',
        issuer: 'freeCodeCamp',
      },
      {
        title: 'Data Analysis with Python',
        url: 'https://www.freecodecamp.org/certification/fccac4153e6-9908-4afc-bab9-40c63b144e06/data-analysis-with-python-v7',
        banner: './assets/img/data_analysis_with_python.png',
        issuer: 'freeCodeCamp',
      },
      {
        title: 'Data Science Foundations',
        url: 'https://www.mygreatlearning.com/certificate/JRKSCXDL',
        banner: './assets/img/dsf.jpg',
        issuer: 'GreatLearning',
      },
      // {
      //     "title": "Introduction to Critical Infrastructure Protection",
      //     "url": "https://learn.opswatacademy.com/certificate/hIhTWoLpvg",
      //     "banner": "./assets/img/opswat_icip.png",
      //     "issuer": "OPSWAT Academy"
      // },
      {
        title: 'NDG Linux Essentials',
        url: 'https://www.netacad.com/certificates?issuanceId=bcdadc32-9e1a-4b1b-bf57-c7d2f630f85c',
        banner: './assets/img/linux_cert.png',
        issuer: 'Cisco Networking Academy',
      },
      {
        title: 'SQL Basics',
        url: 'https://www.hackerrank.com/certificates/3585a121990c',
        banner: './assets/img/sql_basic.png',
        issuer: 'HackerRank',
      },
      {
        title: 'Python Programming',
        url: 'https://www.hackerrank.com/certificates/3585a121990c',
        banner: './assets/img/python_mora.png',
        issuer: 'CODL - University of Moratuwa',
      },
      // { "title": "Python Programming", "url": "https://testautomationu.applitools.com//certificate/?id=c438044a", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-c438044a.png?alt=media&token=a524f221-8161-4984-8b03-4d3060fbbd34", "issuer": "Test Automation University" },
      {
        title: 'The Whole Team Approach to Continuous Testing',
        url: 'https://testautomationu.applitools.com//certificate/?id=398c6b56',
        banner:
          'https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-398c6b56.png?alt=media&token=983daea1-c1a1-4980-9585-e0f406d1a983',
        issuer: 'Test Automation University',
      },
      {
        title: 'Source Control for Test Automation with Git',
        url: 'https://testautomationu.applitools.com//certificate/?id=4be33386',
        banner:
          'https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-4be33386.png?alt=media&token=2c9cd517-4e8d-49c1-8b03-3c7f5222fc97',
        issuer: 'Test Automation University',
      },
      {
        title: 'Intro to Testing Machine Learning Models',
        url: 'https://testautomationu.applitools.com//certificate/?id=48dea906',
        banner:
          'https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-48dea906.png?alt=media&token=49717cf1-0da0-4661-8e5f-0fccab4f4579',
        issuer: 'Test Automation University',
      },
      // { "title": "Setting a Foundation for Successful Test Automation", "url": "https://testautomationu.applitools.com//certificate/?id=26b07906", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-26b07906.png?alt=media&token=109640a0-05fd-43ae-9709-1712694f16e3", "issuer": "Test Automation University" },
      // { "title": "API Test Automation with Postman", "url": "https://testautomationu.applitools.com//certificate/?id=667c4472", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-667c4472.png?alt=media&token=46dc0241-0343-4a4d-b0b3-d9f941580a25", "issuer": "Test Automation University" },
      // { "title": "Codeless Test Automation with Selenium IDE", "url": "https://testautomationu.applitools.com//certificate/?id=4ae6b886", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-4ae6b886.png?alt=media&token=ee7f092c-2c1f-4e7e-b495-bd38f0e8d7dd", "issuer": "Test Automation University" },
      {
        title: 'Test Automation in DevOps',
        url: 'https://testautomationu.applitools.com//certificate/?id=2dac171a',
        banner:
          'https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-2dac171a.png?alt=media&token=636df1a0-5c8d-4a34-960f-caa11e19f77e',
        issuer: 'Test Automation University',
      },
      {
        title: 'Web Element Locator Strategies',
        url: 'https://testautomationu.applitools.com//certificate/?id=b6398ef0',
        banner:
          'https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-b6398ef0.png?alt=media&token=0a905424-087f-413d-a945-7894509a1431',
        issuer: 'Test Automation University',
      },
      // { "title": "Introduction to pytest", "url": "https://testautomationu.applitools.com//certificate/?id=3c9df18a", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-3c9df18a.png?alt=media&token=0efa3af8-fd40-440d-b351-af466609b3a5", "issuer": "Test Automation University" },
      // { "title": "Selenium WebDriver with Python", "url": "https://testautomationu.applitools.com//certificate/?id=c88ea7be", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-c88ea7be.png?alt=media&token=3c59b2c5-f904-47fe-9dc2-eb974173b481", "issuer": "Test Automation University" },
      // { "title": "Automated Visual Testing with Python", "url": "https://testautomationu.applitools.com//certificate/?id=d783beec", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-d783beec.png?alt=media&token=3cbce889-3119-404a-93fa-2a6d1a27fea7", "issuer": "Test Automation University" },
      // { "title": "API Testing in Python", "url": "https://testautomationu.applitools.com//certificate/?id=960d3296", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-960d3296.png?alt=media&token=f7dd75db-01ae-4be3-b2e9-6f92e817fb2a", "issuer": "Test Automation University" },
      {
        title: 'Behavior Driven Python with pytest-bdd',
        url: 'https://testautomationu.applitools.com//certificate/?id=8ff7b33e',
        banner:
          'https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-8ff7b33e.png?alt=media&token=791be8fd-4c46-44d7-8d7d-9ea9ce2772c9',
        issuer: 'Test Automation University',
      },
      // { "title": "Introduction to Robot Framework", "url": "https://testautomationu.applitools.com//certificate/?id=652d3093", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-652d3093.png?alt=media&token=3f7c3f82-4b6f-425b-98c4-f02954978898", "issuer": "Test Automation University" },
      // { "title": "Mocha JavaScript Test Framework", "url": "https://testautomationu.applitools.com//certificate/?id=a1ffa0fc", "banner": "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-a1ffa0fc.png?alt=media&token=a49114dc-073e-4147-b3d8-b3b82afbf429", "issuer": "Test Automation University" },
    ];

    const contactDetails = {
      name: '',
      email: '',
      body: '',
    };

    const mailToLink = computed(
      () =>
        `mailto:www.damianchamel@gmail.com?subject=Profession Work from ${
          contactDetails.name
        }&body=${encodeURIComponent(contactDetails.body)}`
    );

    return {
      projects,
      skills,
      tutorials,
      certifications,
      contactDetails,
      mailToLink,
    };
  },
}).mount('#app');
// Vue app ends
