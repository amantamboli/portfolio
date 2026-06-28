import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: "Email",
    value: "amantamboli7781@gmail.com",
    href: "mailto:amantamboli7781@gmail.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/amantamboli",
    href: "https://github.com/amantamboli/",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/amantamboli",
    href: "https://www.linkedin.com/in/amantamboli/",
  },
];

const Contact = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".contact-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: "#contact", start: "top 75%" },
      }
    );
  });

  return (
    <section id="contact" className="section-padding md:px-20 px-5 md:mt-20 mt-10">
      <TitleHeader title="Get In Touch" sub="📬 Let's connect" />

      {/* Horizontal contact bar */}
      <div className="mt-12 card-border rounded-2xl p-8 md:p-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-item flex items-center gap-4 group"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white-50 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-white-50 text-xs uppercase tracking-widest mb-0.5">
                  {item.label}
                </p>
                <p className="text-white font-medium text-sm group-hover:text-white/80 transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-8" />

        {/* Resume row — placeholder for now */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-white-50 text-sm">
            Interested in working together? Download my resume or reach out directly.
          </p>
          <a
            href="#"
            className="cta-button group pointer-events-none opacity-50"
            title="Resume link coming soon"
          >
            <div className="bg-circle" />
            <p className="text">Download Resume</p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
