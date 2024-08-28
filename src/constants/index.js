import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic aspiring full stack developer with a passion for creating efficient and user-friendly web applications. Although I am just beginning my journey, I am eager to learn and have been exploring various technologies, including React, Express.js, Node.js, MongoDB,C,C++,Python, and MongoDB. My curiosity for how things work drives me to continuously learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Blogging Platform",
    image: project1,
    description:
      "A platform for creating and publishing blog posts, with features like posting, editing and deleting blogs.",
    technologies: ["HTML", "TailwindCSS", "React.js", "Express", "MongoDB"],
    website: "https://my-blog-page-tau.vercel.app/",
    gitrepo: "https://github.com/xeeteex/BlogPageMR",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A responsive portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "React.js"],
    website: "https://sloth-web-phi.vercel.app/",
    gitrepo: "https://github.com/xeeteex/SlothWeb",
  },
  {
    title: "Food Recipe",
    image: project3,
    description:
      "A website that pulls information about different food dishes with recipe and ingredients using a free api",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    website: "https://food-menu-apif.vercel.app/",
    gitrepo: "https://github.com/xeeteex/FoodmenuAPI",
  },
];

export const CONTACT = {
  address: "Lalitpur, Nepal ",
  phoneNo: "+977 9861685567 ",
  email: "xeeteexstha@gmail.com",
};
