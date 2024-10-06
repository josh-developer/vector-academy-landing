export enum CourseStatus {
  ONGOING = 1,
  OPEN = 2,
  FINISHED = 3,
  SOON = 4,
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  occurence: string;
  image: string;
  time: string;
  durationLesson: string;
  status: CourseStatus;
  type: 'Onlayn' | 'Offlayn';
  link: string;
  mentor: Mentor;
}

export interface Mentor {
  fullname: string;
  title: string;
  company: string;
  image?: string;
  socialMedia?: SocialMedia[];
  prevCompanies: PreviousCompany[];
}

export interface PreviousCompany {
  name: string;
  logo: string;
}

interface SocialMedia {
  href: string;
  imageSrc: string;
  altText: string;
}
export interface Comments {
  id: number;
  fullname: string;
  courseName: string;
  description: string;
}
