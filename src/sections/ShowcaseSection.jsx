import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "DevOps Projects",
    desc: "A collection of DevOps projects including a CI/CD pipeline orchestrated with Jenkins, Docker, Argo CD, and Kubernetes for a Flask monitoring app; Kubernetes deployment on Amazon EKS; a React + Golang + MongoDB app with replica-set; Docker-based full-stack app; and Terraform-automated AWS website hosting.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Argo CD", "Terraform", "Flask", "AWS"],
    imgPath: "/images/devops.png",
    github: "https://github.com/amantamboli/",
  },
  {
    title: "StudyHub",
    desc: "StudyHub is a web application designed to simplify academic life for students. This all-in-one dashboard lets students create to-do lists, manage homework assignments, take notes, search books, access Wikipedia, save YouTube tutorial videos, and use an integrated dictionary — available 24/7 across all devices.",
    tech: ["Python", "Django", "JavaScript"],
    imgPath: "/images/studyhub.png",
    github: "https://github.com/amantamboli/studyhub",
  },
  {
    title: "StudiTalk — Chat Application",
    desc: "A chat application that connects students with similar interests, fostering a supportive and engaging environment. Students specify their preferences to initiate chats with like-minded peers, creating a platform where knowledge-sharing and learning thrive.",
    tech: ["PHP", "JavaScript", "PostgreSQL"],
    imgPath: "/images/chatapp.png",
    github: "https://github.com/amantamboli/studitalk",
  },
  {
    title: "Duplicate Question Detection",
    desc: "An NLP and machine learning project to identify semantically duplicate questions on Q&A platforms like Quora and StackOverflow. Trained on Quora's question-pair dataset from Kaggle, the model classifies question pairs as duplicate or non-duplicate even when phrased differently.",
    tech: ["Python", "NLP", "Machine Learning", "Streamlit", "Jupyter"],
    imgPath: "/images/dqd.png",
    github: "https://github.com/amantamboli/duplicate_questions_detection",
    live: "https://shark-app-ed2ae.ondigitalocean.app/",
  },
  {
    title: "Insurance Management System",
    desc: "A full-stack web portal that allows users to buy different types of insurance and manage existing insurance policies, covering policy details, payment flow, customer information, and car insurance modules.",
    tech: ["PHP", "PostgreSQL", "Bootstrap"],
    imgPath: "/images/insurance.png",
    github: "https://github.com/amantamboli/insurance_webapp",
  },
];

const ProjectCard = ({ project, index, cardRef }) => (
  <div
    ref={cardRef}
    className="card-border rounded-xl overflow-hidden flex flex-col group"
  >
    {/* Thumbnail */}
    <div className="relative overflow-hidden" style={{ height: "200px", background: "#0d0d1a" }}>
      <img
        src={project.imgPath}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col gap-3 flex-1">
      <h3 className="text-white font-semibold text-xl leading-tight">
        {project.title}
      </h3>
      <p className="text-white-50 text-sm leading-relaxed flex-1">
        {project.desc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full border border-white/15 text-white-50"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white-50 hover:text-white underline underline-offset-4 transition-colors"
        >
          GitHub →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white-50 hover:text-white underline underline-offset-4 transition-colors"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 * index,
          scrollTrigger: { trigger: card, start: "top bottom-=80" },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="section-padding md:px-20 px-5">
      <TitleHeader
        title="Personal Projects"
        sub="🚀 Things I have built"
      />

      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default AppShowcase;
