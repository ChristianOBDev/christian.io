/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 * This is the central configuration file for the entire website.
 * To customize this site for your own use, update the values below.
 *
 * See CUSTOMIZATION.md in the project root for a detailed guide.
 * ============================================================
 */

// ---------------------
// Personal Information
// ---------------------

export const siteConfig = {
  /** Your full name */
  name: "Christian O'Brien",

  /** Your job title / tagline shown in hero and SEO */
  jobTitle: 'Unity Developer & Game Designer',

  /** Short bio displayed in the hero section */
  bio: 'I am a Unity Developer and Game Designer with a passion for creating immersive experiences. I specialize in developing interactive applications and games that engage users through innovative design, non-standard interfaces, and cutting-edge technology. Currently based in the UK, and open to contract and freelance opportunities worldwide.',

  /** Your country / location */
  location: 'United Kingdom',

  /** Your email address */
  email: 'christianob.dev@gmail.com',

  /** Greeting sequence for the hero typing animation ([text, delay, text, delay, ...]) */
  greetings: ['Hola!', 1000, 'Bonjour!', 1000, 'Dia dhuit!', 1000, 'Hi there!', 1000] as (
    | string
    | number
  )[],
};

// ---------------------
// URLs & Social Links
// ---------------------

export const siteUrls = {
  /** Base URL of the deployed site (no trailing slash) */
  baseUrl: 'https://christianobdev.github.io/christian.io',

  /** Your GitHub profile URL */
  github: 'https://github.com/christianobdev',

  /** Your LinkedIn profile URL */
  linkedin: 'https://www.linkedin.com/in/chrxstian/',

  /** Your Instagram handle (with @) — used in SEO meta tags */
  twitterHandle: '@LunchRunOnStrava',

  /** Your blog URL (shown in navbar & footer) */
  // blog: 'https://dev.to/christianobrien',
};

// ---------------------
// Navigation Links
// ---------------------

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  // { href: siteUrls.blog, label: 'Blogs' },
];

// ---------------------
// Skills (Hero Marquee & Features Section)
// ---------------------

export interface Skill {
  /** Display name */
  text: string;
  /**
   * Icon identifier — one of the react-icons keys.
   * The component maps this string to an actual icon.
   * Supported values: 'SiArcgis', 'SiQgis', 'SiOpenlayers', 'SiLeaflet',
   * 'SiPython', 'SiJavascript', 'SiTypescript', 'SiAngular',
   * 'SiPostgresql', 'SiGit', 'SiDocker', 'SiKubernetes',
   * 'SiArgo', 'SiApacheairflow', 'SiOsgeo'
   */
  icon: string;
}

export const skills: Skill[] = [
  { text: 'Unity', icon: 'SiUnity' },

  { text: 'JavaScript', icon: 'SiJavascript' },
  { text: 'SQL', icon: 'SiPostgresql' },
  { text: 'Version Control', icon: 'SiGit' },
  { text: 'Node.JS', icon: 'SiNodedotjs' },
  { text: 'VR', icon: 'FaVrCarboard' },
];

// ---------------------
// Projects
// ---------------------

export interface Project {
  title: string;
  description: string;
  /** List of technology names shown as badges */
  tech: string[];
  /** GitHub repository URL */
  github: string;
  /** Live demo URL */
  live: string;
  /**
   * Image filename inside src/media/ (e.g. 'digipin.jpeg').
   * You must also add the actual image file to that folder.
   * The component will import it dynamically.
   */
  image: string;
}

export const projects: Project[] = [
  {
    title: 'IAH NeuroGame',
    description:
      'A game which harnesses EEG technology to provide a brain-computer interface. This game allowed players to learn, practice, and play using BCI. Playable in VR, on PC, and on Android tablets, I was responsible for game design, system architecture, game programming, publishing, and carrying out testing protocols.',
    tech: ['Unity', 'C#', 'VR', 'Android', 'BCI', 'EEG'],
    github: '',
    live: '',
    image: 'iah.webp',
  },
  {
    title: 'WeatherDarts',
    description:
      'A free online daily game which tests your geography and climate knowledge. Given a target temperature, guess up to 5 cities, one at a time, whose real-time temperature will add up to the target. Featuring a stylized frontend and robust backend, I built and published this website myself using JavaScript, Tailwind, and SQL.',
    tech: ['JavaScript', 'Tailwind', 'Express', 'NodeJS', 'SQL', 'HTML', 'CSS'],
    github: 'https://github.com/christianobdev/weather-darts',
    live: 'https://weatherdarts.com',
    image: 'weather-darts-logo.webp',
  },
  {
    title: 'DistanceTimePace Calculator',
    description:
      'A web-tool used for calculating running or cycling statistics. I was inspired to make this tool as I was disappointed in the usability of many other online pace calculators. This was my first web development project, built using Bootstrap and React',
    tech: ['React', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    github: 'https://github.com/christianobdev/pace-calculator-app',
    live: 'https://pace-calculator-app.vercel.app',
    image: 'dtp.webp',
  },
  {
    title: 'MOONHUB VR Training',
    description:
      "MOONHUB's immersive VR training platform, designed to provide realistic and interactive training experiences. I was the sole Unity Developer on this project, responsible for implementing core functionalities, optimizing performance, and ensuring a seamless user experience across various VR devices.",
    tech: ['Unity', 'C#', 'VR'],
    github: '',
    live: 'https://themoonhub.com/',
    image: 'moonhub.webp',
  },
  // {
  //   title: 'MOONHUB Cyber Escape',
  //   description:
  //     "MOONHUB's first fully immersive 3D VR experience. I spearheaded this initiative, taking responsibility for all processes in the pipeline from game design to development, programming, localization, documentation, and publishing.",
  //   tech: ['Unity', 'VR', 'C#', 'XR Interaction Toolkit'],
  //   github: '',
  //   live: '',
  //   image: 'cyberescape.webp',
  // },
  {
    title: 'Phantasm Virtual Visualization',
    description:
      'Phantasm\s virtual visualization tool for the film and media industry. A multi-platform application offering visualization, storyboarding, and animation toolsets for pre-production. I was responsible for functionality development, user interface, asset management, documentation, and user support. I supported this project through its use on Mission Impossible, Fast and Furious, and other major productions.',
    tech: ['Unity', 'C#'],
    github: '',
    live: 'https://phantasm.studio/vv/',
    image: 'phantasmvv.webp',
  },
  {
    title: 'ASL FingerSpeller',
    description:
      "My Master's thesis project, a VR application for learning the American Sign Language alphabet. I designed and developed this application to provide an immersive and interactive learning experience, utilizing hand tracking technology to allow users to practice signing in a virtual environment.",
    tech: ['Unity', 'C#', 'VR', 'Oculus SDK', 'Hand Tracking'],
    github: 'https://github.com/ChristianOBDev/asl-fingerspeller',
    live: 'https://sidequestvr.com/app/1317/asl-fingerspeller',
    image: 'aslfingerspeller.webp',
  },
];

// ---------------------
// About Me Cards
// ---------------------

export interface AboutCard {
  title: string;
  description: string;
  /** SVG filename inside src/media/svgs/ (e.g. 'Character1.svg') */
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export const aboutCards: AboutCard[] = [
  // {
  //   title: 'About Me',
  //   description:
  //     "I'm currently working as a Geospatial Software Engineer at Camptocamp, where I specialize in geospatial software development.",
  //   image: 'Character1.svg',
  //   imageAlt: 'Character1',
  //   imagePosition: 'right',
  // },
  // {
  //   title: 'Geospatial Development',
  //   description:
  //     'I thrive on continuously learning various geospatial technologies, from GIS software to spatial databases, to shape ideas into functional applications.',
  //   image: 'Character2.svg',
  //   imageAlt: 'Character2',
  //   imagePosition: 'left',
  // },
  // {
  //   title: 'Interest in Technology',
  //   description:
  //     'Technology has fascinated me since I was young, especially the joy of building things. Combining tech with hands-on creation has always felt just right for me.',
  //   image: 'Character3.svg',
  //   imageAlt: 'Character3',
  //   imagePosition: 'right',
  // },
  // {
  //   title: 'Other Hobbies',
  //   description:
  //     'Here are some of my other passions: I like to dance, play chess, love watching F1, and am a Potterhead.',
  //   image: 'Character4.svg',
  //   imageAlt: 'Character4',
  //   imagePosition: 'left',
  // },
];

// ---------------------
// Journey Timeline
// ---------------------

export interface TimelineEntry {
  id: number;
  title: string;
  date: string;
  description: string;
  /* [longitude, latitude] */
  location: [number, number];
  locationName: string;
  popupTitle: string;
  popupDescription: string;
}

//location is in [long, lat]
export const timelineData: TimelineEntry[] = [
  {
    id: 1,
    title: 'Research Assistant @ University of Bath',
    date: 'Jan 2026 - Jun 2026',
    description:
      'I contributed to the research undertaken by the Institute for the Augmented Human, focusing on the development of a brain-computer interface (BCI) game. This project aimed to explore the potential of BCI technology in gaming and interactive experiences.',
    location: [-2.359017, 51.381065],
    locationName: 'Bath, UK',
    popupTitle: 'University of Bath',
    popupDescription: "Spearheading the development of the IAH's latest BCI game.",
  },
  {
    id: 2,
    title: 'Freelance Developer',
    date: '2024 - 2025',
    description:
      'Taking some time to work on personal projects and freelance work, I focused on learning new skills in web technologies, and building a portfolio of projects to showcase my abilities.',
    location: [-2.991573, 53.408371],
    locationName: 'Liverpool, UK',
    popupTitle: 'WeatherDarts',
    popupDescription:
      'Learning new skills and building a portfolio of projects to showcase my abilities.',
  },
  {
    id: 3,
    title: 'Unity Developer @ MOONHUB',
    date: '2023 - 2024',
    description:
      "As sole Unity Developer at MOONHUB, I collaborated with a cross-functional team to bring MOONHUB's immersive VR training platform to life.",
    location: [-0.127758, 51.507351],
    locationName: 'London, UK',
    popupTitle: 'MOONHUB',
    popupDescription:
      "Collaborating with a cross-functional team to bring MOONHUB's immersive VR training platform to life.",
  },
  {
    id: 4,
    title: 'Unity Developer @ Phantasm Studio',
    date: '2020 - 2022',
    description:
      ' virtual visualization tools for the film and media industry, contributing to projects used in major productions.',
    location: [-0.41694253485911503, 51.690697675725715],
    locationName: 'London, UK',
    popupTitle: 'Phantasm Studio',
    popupDescription:
      'Developing virtual visualization tools for the film and media industry, contributing to projects used in major productions.',
  },
  {
    id: 5,
    title: 'Quality Assurance Tester @ Activision-Blizzard',
    date: '2020 - 2020',
    description:
      'Contributed to the release of Call of Duty: Black Ops Cold War by testing and debugging the game, ensuring a smooth launch for players worldwide.',
    location: [-97.74055039537241, 30.273787925465474],
    locationName: 'Austin, Texas, USA',
    popupTitle: 'Activision-Blizzard',
    popupDescription:
      'Played a key role in the successful launch of Call of Duty: Black Ops Cold War by rigorously testing and debugging the game.',
  },
  {
    id: 6,
    title: 'M.Sc. Serious Games and Virtual Reality @ The Glasgow School of Art',
    date: '2019 - 2020',
    description:
      "My Master's degree focused on the design and development of serious games and virtual reality applications, equipping me with advanced skills in immersive technologies.",
    location: [-4.295010519317187, 55.856855238980714],
    locationName: 'Glasgow, UK',
    popupTitle: 'Glasgow School of Art',
    popupDescription:
      "Learning the design and development of serious games and virtual reality applications, and creating an award winning VR game for my Master's thesis.",
  },
  {
    id: 7,
    title: 'B.Sc. Visual Effects and Motion Graphics @ Brunel University London',
    date: '2015 - 2018',
    description:
      'I pursued a Bachelor’s degree in Visual Effects and Motion Graphics at Brunel University London, gaining a strong foundation in creative and technical skills for the entertainment industry.',
    location: [-0.472802946515158, 51.532766237267545],
    locationName: 'London, UK',
    popupTitle: 'Brunel University',
    popupDescription:
      'Pursuing a Bachelor’s degree in Visual Effects and Motion Graphics, gaining a strong foundation in creative and technical skills for the entertainment industry.',
  },
];

// ---------------------
// SEO & Metadata
// ---------------------

export const seoConfig = {
  /** Default page title */
  title: "Christian O'Brien - Unity Developer & Game Designer",

  /** Title template for sub-pages (%s is replaced by the page title) */
  titleTemplate: "%s | Christian O'Brien",

  /** Meta description */
  description:
    'I am a Unity Developer and Game Designer with a passion for creating immersive experiences. I specialize in developing interactive applications and games that engage users through innovative design, non-standard interfaces, and cutting-edge technology. Currently based in the UK, and open to contract and freelance opportunities worldwide.',

  /** SEO keywords */
  keywords: [
    'Unity Developer',
    'Software Engineer',
    'Game Designer',
    'Game Developer',
    'VR Developer',
    'Virtual Reality',
    'Immersive Experiences',
    'Interactive Applications',
    'Non-standard Interfaces',
    'Cutting-edge Technology',
    'UK',
    'United Kingdom',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'C#',
    'XR',
    'XR Interaction Toolkit',
    'XR Development',
    'Brain-Computer Interface',
    'Brain Computer Interface',
    'BCI',
  ],

  /** Open Graph image URL (absolute URL) */
  ogImage: 'https://christianobdev.github.io/christian.io/christian.webp',

  /** Site name for Open Graph */
  siteName: "Christian O'Brien Portfolio",

  /** Google Verification code (optional) */
  googleVerification: 'your-google-verification-code',
};

// ---------------------
// Footer
// ---------------------

export const footerConfig = {
  /** Left-side copyright text — {year} will be replaced at runtime */
  copyrightText: '{name}',

  /** Right-side tech badge text */
  techBadge: '</> with Next.js + Tailwind',
};
