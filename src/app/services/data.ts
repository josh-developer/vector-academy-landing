import { Course, CourseStatus } from '../models/models';

export const data: Course[] = [
  {
    id: 'angular_course',
    name: 'JS, TS va Angular',
    status: CourseStatus.SOON,
    description:
      "Ushbu kursda JavaScript, Typescript va Angular o'tiladi. Ushbu kursda JavaScript, Typescript va Angular o'tiladi.",
    duration: '5 oy',
    occurence: 'Har Shanba va Yakshanba',
    time: '11:00',
    durationLesson: '3 souat',
    type: 'Onlayn',

    link: '#',
    image: './images/svg/angular.svg',
    mentor: {
      fullname: 'Umar Sadullayev',
      title: 'Senior Frontend Engineer',
      company: 'Unicon Soft',
      socialMedia: [
        {
          href: '#!',
          imageSrc: './images/svg/facebook.svg',
          altText: 'Facebook',
        },
        {
          href: '#!',
          imageSrc: './images/svg/instagram.svg',
          altText: 'Instagram',
        },
        {
          href: '#!',
          imageSrc: './images/svg/telegram.svg',
          altText: 'Telegram',
        },
        {
          href: '#!',
          imageSrc: './images/svg/linkedin.svg',
          altText: 'Linkedin',
        },
        {
          href: '#!',
          imageSrc: './images/svg/youtube.svg',
          altText: 'Youtube',
        },
      ],
      prevCompanies: [
        {
          name: 'Payme',
          logo: './images/png/payme.png',
        },
        {
          name: 'Exadel',
          logo: './images/png/exadel.png',
        },
        {
          name: 'Unicon soft',
          logo: './images/svg/uniconsoft.svg',
        },
        {
          name: 'EPAM',
          logo: './images/png/epam.png',
        },        
      ],
    },
  },

  {
    id: 'nodejs_advanced',
    name: 'Node.js Advanced',
    status: CourseStatus.FINISHED,
    description:
      "Ushbu kursda JavaScript, Typescript va Angular o'tiladi. Ushbu kursda JavaScript, Typescript va Angular o'tiladi.",
    duration: '5 oy',
    occurence: 'Har Shanba va Yakshanba',
    time: '11:00',
    durationLesson: '3 souat',
    type: 'Onlayn',
    link: '#',
    image: './images/svg/nodejs.svg',
    mentor: {
      fullname: 'Husniddin Qurbonboyev',
      title: 'Senior Backend Engineer',
      image: './images/png/user1.png',
      company: 'Unicon Soft',
      prevCompanies: [
        {
          name: 'Unicon soft',
          logo: './images/png/payme.png',
        },
        {
          name: 'Unicon soft',
          logo: './images/png/exadel.png',
        },
        {
          name: 'Unicon soft',
          logo: './images/png/uniconsoft.png',
        },
        {
          name: 'Unicon soft',
          logo: './images/png/epam.png',
        },
      ],
    },
  },
];
