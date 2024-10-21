import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    livisibly,
    in4m8,
    starbucks,
    tesla,
    shopify,
    carrent,
    myweb,
    consultpage,
    jobit,
    tripguide,
    threejs,
    my3dweb,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Tukta Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "livisibly",
      icon: livisibly,
      iconBg: "#383E56",
      date: "Nov 2023 - Present",
      points: [
        "Developed and maintained responsive websites using React JS, ensuring cross-browser compatibility and user-friendly design",
        "Implemented new features and enhancements using HTML, CSS, and JavaScript",
        "Collaborated with team to ensure seamless integration and functionality of web projects",
        "Conducted thorough testing and debugging of code to ensure functionality and identify and resolve any issues promptly",
        "Wrote API to Plaid services using Python",
        "Wrote back-end API to Neo4j for transaction analysis",
        "Performed unit testing, UX/usability testing, system testing on my code and peer code",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "in4m8",
      icon: in4m8,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Oct 2023",
      points: [
        "Developed a cutting-edge social media full-stack web application, incorporating innovative features and functions with React JS",
        "Designed and implemented a highly intuitive user interface through the utilization of Figma design tools",
        "Constructed and integrated authentication protocols, ensuring data security and user privacy",
        "Engineered the backend infrastructure, leveraging advanced technologies and frameworks",
        "Successfully deployed the application on AWS Amplify, optimizing scalability and performance",
        "Tested the application using predefined test cases",
      ],
    },
    {
      title: "Database Administrator",
      company_name: "Lenso Aerospace Co., Ltd",
      //icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2019 - Oct 2021",
      points: [
        "Managed and optimized database systems, ensuring high availability, backups, and disaster recovery",
        "Optimized SQL queries, resolved performance issues, and supported development teams with database integration",
        "Designed efficient database schemas, executed data migrations, and maintained thorough documentation",
      ],
    },
    //{
      //title: "Full stack Developer",
      //company_name: "Meta",
      //icon: meta,
      //iconBg: "#E6DEDD",
      //date: "Jan 2023 - Present",
      //points: [
        //"Developing and maintaining web applications using React.js and other related technologies.",
        //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        //"Implementing responsive design and ensuring cross-browser compatibility.",
        //"Participating in code reviews and providing constructive feedback to other developers.",
     // ],
    //},
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tukta proved me wrong.",
      name: "Chase G",
      designation: "CEO",
      company: "Livisibly LLC",
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tukta does.",
      name: "William B",
      designation: "CEO",
      company: "IN4M8 ADVISORS LLC",
      //image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Tukta optimized our website, our traffic increased by 50%. We can't thank her enough!",
      name: "Alex M",
      designation: "CFO",
      company: "Livisibly LLC",
      //image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Website",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
       
        
      ],
      image: myweb,
      source_code_link: "https://github.com/",
    },
    {
      name: "Consulting Website",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        
      ],
      image: consultpage,
      source_code_link: "https://github.com/",
    },
    {
      name: "My 3D Website",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        
      ],
      image: my3dweb,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };