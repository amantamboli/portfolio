const navLinks = [
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#work" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const words = [
  { text: "Software", imgPath: "/images/ideas.svg" },
  { text: "DevOps", imgPath: "/images/code.svg" },
  { text: "Python", imgPath: "/images/logos/python.svg" },
  { text: "Solutions", imgPath: "/images/designs.svg" },
  { text: "Software", imgPath: "/images/ideas.svg" },
  { text: "DevOps", imgPath: "/images/code.svg" },
  { text: "Python", imgPath: "/images/logos/python.svg" },
  { text: "Solutions", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
];

const logoIconsList = [
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/python.svg" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/git.svg" },
  { imgPath: "/images/logos/three.png" },
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/python.svg" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/git.svg" },
  { imgPath: "/images/logos/three.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full Stack Development",
    desc: "Building scalable web applications with Python, Django, JavaScript, and modern frameworks.",
  },
  {
    imgPath: "/images/chat.png",
    title: "DevOps Engineering",
    desc: "Deploying and automating infrastructure with Docker, Kubernetes, CI/CD pipelines, and cloud platforms.",
  },
  {
    imgPath: "/images/time.png",
    title: "Problem Solving",
    desc: "Strong background in mathematics, data structures, algorithms, and machine learning solutions.",
  },
];

const techStackImgs = [
  { name: "Python & Django", imgPath: "/images/logos/python.svg" },
  { name: "JavaScript & React", imgPath: "/images/logos/react.png" },
  { name: "Node.js & Backend", imgPath: "/images/logos/node.png" },
  { name: "Git & DevOps", imgPath: "/images/logos/git.svg" },
  { name: "Three.js & WebGL", imgPath: "/images/logos/three.png" },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript & React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "DevOps & Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "3D & Interactive",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Rubiscape — Product-based data science & analytics company. Leading backend development and driving tech upgrades across the full Python/Django stack.",
    color: "#4F46E5",
    title: "Software Engineer",
    company: "Rubiscape",
    subtitle: "Product Development",
    date: "March 2024 - Present",
    responsibilities: [
      "Developed and enhanced data-centric products by adding 20+ features, improving functionality and user experience across client applications.",
      "Delivered 5+ custom software solutions for different clients, focusing on data-driven applications and backend systems.",
      "Designed and developed scalable backend services using Python, Django and FastAPI, building robust RESTful APIs across multiple projects.",
      "Engineered and optimized database architectures using SQLAlchemy, Django ORM, and PostgreSQL, improving query performance and data handling efficiency.",
      "Implemented CI/CD pipelines, automated deployments, and monitored production systems to maintain 99%+ uptime.",
      "Built modular and microservices-based architectures, enabling scalability, flexibility, and easier maintenance for diverse client requirements.",
      "Led a major tech-debt elimination effort as lead backend developer — upgraded Python from 3.11.3 → 3.13.14, Django 4.2 → 6.0.5, SQLAlchemy, Celery, DRF, and several ML libraries.",
      "Deployed applications using Docker, Kubernetes, and AWS, ensuring reliable and scalable production environments.",
    ],
  },
  {
    review: "Max Secure Software — Cybersecurity company specializing in antivirus and endpoint security products.",
    color: "#DC2626",
    title: "Software Developer Intern",
    company: "Max Secure Software",
    subtitle: "",
    date: "March 2023 - May 2023",
    responsibilities: [
      "Developed and optimized internal antivirus signature generation tools using C++.",
      "Worked closely with the malware analysis team to implement new application components and improve existing system functionality.",
      "Implemented 3 new features in existing C++ tools, improving antivirus signature generation efficiency by 15%.",
      "Utilized Data Structures and Algorithms to optimize processing workflows and improve execution performance.",
      "Performed code analysis, testing, debugging, and troubleshooting to ensure reliable software behavior under varying workloads.",
      "Collaborated with developers and testers during feature implementation, testing, and production issue resolution.",
    ],
  },
];

const expLogos = [
  { name: "Rubiscape", imgPath: "/images/rubiscape-logo.svg" },
  { name: "Max Secure Software", imgPath: "/images/maxsecure-logo.svg" },
];

const testimonials = [];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/x.png",
    url: "https://github.com/amantamboli/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/amantamboli/",
  },
  {
    name: "email",
    imgPath: "/images/fb.png",
    url: "mailto:amantamboli7781@gmail.com",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
