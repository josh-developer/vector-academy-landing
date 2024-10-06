import { Course, Comments, CourseStatus } from '../models/models';

export const data: Course[] = [
  {
    id: 'angular_course',
    name: 'JS, TS va Angular',
    status: CourseStatus.SOON,
    description:
      "Ushbu kursda JavaScript, TypeScript va Angular bo'yicha asosiy tushunchalar va amaliy ko'nikmalar beriladi.",
    duration: '5 oy',
    occurence: 'Har Shanba va Yakshanba',
    time: '11:00',
    durationLesson: '3 soat',
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
      "Ushbu kursda JavaScript, TypeScript va Node.js bo'yicha advaced mavzular va amaliy ko'nikmalar beriladi.",
    duration: '5 oy',
    occurence: 'Har Shanba va Yakshanba',
    time: '11:00',
    durationLesson: '3 soat',
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
  {
    id: 'Frontint.uz',
    name: 'Frontint.uz',
    status: CourseStatus.FINISHED,
    description:
      "Kurs Frontend intervyuga tayyorlanayotgan, Frontend yo'nalishi bo'yicha chuqur bilim xohlayotgan, HTML, CSS va JavaScriptni asosiy qismlarini biladigan barcha uchun. Ingliz tili talab qilinmaydi.",
    duration: '3 soat',
    occurence: 'Oldindan kelishilgan kunda',
    time: '10:00',
    durationLesson: '3 soat',
    type: 'Onlayn',
    link: '#',
    image: './images/svg/english.svg',
    mentor: {
      fullname: 'Senior Dasturchilar',
      title: '',
      image: './images/png/user1.png',
      company: 'Unicon Soft, Epam',
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
          name: 'Epam`',
          logo: './images/png/epam.png',
        },
      ],
    },
  },
];
export const commentsData: Comments[] = [
  {
    id: 1,
    fullname: 'Akbar Israilov',
    courseName: 'Frontint.uz',
    description: 'Ilmiy koʻnikmalarimni rivojlantirishga sabab boʻlmoqda.',
  },
  {
    id: 2,
    fullname: 'Faxriddin Oripov',
    courseName: 'Frontint.uz',
    description:
      'Intervyuga tayyorlanishda bilmagan koʻp narsalarimni oʻrgandim va bilganlarimni ishonch bilan gapira olishga yordam berdi.',
  },
  {
    id: 3,
    fullname: 'Ural Yuldashov',
    courseName: 'JS, TS va Angular',
    description:
      "Javascript buyicha bundan yaxshiroq uzbek kursini hali ko'rmadim",
  },
  {
    id: 4,
    fullname: 'Sunnatillo Askaraliyev',
    courseName: 'JS, TS va Angular',
    description:
      "Kurs ajoyib, Angularni 0 dan o'rgandim va kariyeramni boshladim, Alhamdulillah",
  },
  {
    id: 5,
    fullname: 'Jamshidbek Makhmudov',
    courseName: 'Node.js Advanced',
    description:
      'Yuqoridagi 2ta kursni oqidim, kurs juda yaxshi, sıfatlı tayyorlangan. ishga kirish borasida ham ancha ozimga ishonchim ortdi.',
  },
  {
    id: 6,
    fullname: 'Abubakir Mahkamov',
    courseName: 'Node.js Advanced',
    description: 'Nodejsni chuqur tagidan tushinishimga yordam berdi',
  },
  {
    id: 7,
    fullname: 'Atabek Otepbergenov',
    courseName: 'Frontint.uz',
    description:
      "Ushbu frontend bo'yicha video kurs menga ish qidirishda katta yordam berdi. Materiallar oson tushunarli bo'lib, intervyuga tayyorgarlik ko'rish jarayonini ancha soddalashtirdi. Ushbu kursni topib, undan foydalanganim uchun juda minnatdorman!",
  },
];
