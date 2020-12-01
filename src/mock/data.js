import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yash Soni',
  subtitle: 'I am Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'yash.jpg',
  paragraphOne: 'Yash is a self-development enthusiast and passionate about life-long learning. I believe in the power of technology to transform and improve the lives of people around the world.',
  paragraphTwo: 'My Professional Skills: A Web Developer ready to build professional websites from the bottom up.',
  paragraphThree: 'Able to complete projects efficiently with attractive, user-friendly websites. Fast learner, result oriented, and team player who is proficient in an array of scripting languages.',
  resume: 'https://www.google.com/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Fully Functional and Responsive Ecommerce Application',
    info: '.',
    info2: ' .',
    url: 'https://commerce-js.netlify.app',
    repo: 'https://github.com/mryashsoni/ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Mini Projects',
    info: '.',
    info2: '.',
    url: 'https://html-css-mini-projects.netlify.app',
    repo: 'https://github.com/mryashsoni/mini-projects', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Covid Meter',
    info: '.',
    info2: '.',
    url: 'https://covid19statswebsite.netlify.app/',
    repo: 'https://github.com/mryashsoni/covidmeter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+91-8770569251',
  btn: 'yashsoni1516@gmail.com',
  email: 'yashsoni@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mryashsoni',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
