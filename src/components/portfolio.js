"use client"
import React, { useState, useEffect } from 'react';
import { Terminal, Code, User, Briefcase, Mail, Layout, Github, Linkedin } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  useEffect(() => {
    if (!text) return;
    setDisplayText('');
    setIsTyping(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index))
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isTyping }
}
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [isLoading, setIsLoading] = useState(true)
  const [keySequence, setKeySequence] = useState([])
  const [glitchText, setGlitchText] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const personalInfo = {
    name: "Aadil Sayyed",
    title: "Full Stack Developer",
    location: "Shirdi, India",
    email: "aadil_sayyed@outlook.com",
    website: "AadilSayyed.com",
    mob: "+91 85518 90913",
    github: 'http://www.github.com/Aadil009',
    linkedin: 'https://www.linkedin.com/in/aadilsayyed'
  };

  const aboutText = `Ggreetings! I'm ${personalInfo.name}, a ${personalInfo.title} based in ${personalInfo.location}. 
    I craft digital experiences with a passion for clean code and innovative solutions.`;
  const { displayText: typedAbout, isTyping: isTypingAbout } = useTypewriter(activeSection === 'about' ? aboutText : '')

  const skills = [
    "JavaScript", "React", "React Native", "Node.js", "Python", "AWS",
    "TypeScript", "MongoDB", "C", "CPP", "Next js", "HTML", "PHP", "MySQL", "Java", "Data Structures"
  ]

  const experiences = [
    {
      company: "Metadesign Software Services",
      role: "Software Engineer",
      period: "July 2021 - Present",
      description: "Worked on a range of payment solutions utilized by merchants, aiming to improve the efficiency and reliability of their transaction systems. Collaborated with teams to develop innovative features and resolve issues to ensure smooth operation and user satisfaction."
    },
    {
      company: "Metadesign Software Services",
      role: "Software Engineer Intern",
      period: "January 2021 - June 2021",
      description: "Developed a platform application to display live transaction data summaries to merchants in various formats and collaborated with the team to resolve issues in other projects."
    }
  ];

  const projects = [
    {
      name: "SocioEscape",
      tech: "React Native",
      image: '/images/socioescape.png',
      description: "Escape from social media by using SocioEscape. SocioEscape allows user to set the limit to social media application installed on their mobile and blocks the access when limit exceeds to particular app",
      type: 'app',
      link: ''
    },
    {
      name: "DailySync",
      tech: "React Native, Node js, Express, MongoDB",
      image: '/images/daily-sync.png',
      description: "App which will give you news in 60-100 words",
      type: 'app',
      link: ''
    },
    {
      name: "Post Enhancer",
      tech: "Node js, Express, MongoDB, Anthropic AI, Google Cloud Shell",
      image: '/images/post-enhancer.png',
      description: "Post Enhancer - A platform for social media influencers to maximize their reach to active users across various platforms using post enhancement tool",
      type: 'web',
      link: 'https://post-enhancer-app-dot-dailysync-backend-service.et.r.appspot.com/',
      repo: 'https://github.com/Aadil009/post-enhancer'
    },
    {
        name: "Tourism Website",
        tech: "HTML, CSS, PHP, MySql",
        image: '/images/alhuda-haj-tours.png',
        description: "AlhudaHajTours - Tourism website where customers can book their haj umrah tours package from various packages",
        type: 'web',
        link: 'https://www.alhudahajtours.com',
      },
    {
        name: 'Portfolio',
        tech: 'Next.js , Tailwind CSS',
        image: '/images/portfolio.png',
        description: 'My portfolio website',
        type: 'web',
        link: 'https://portfolio-dot-dailysync-backend-service.et.r.appspot.com/',
    },
    {
        name: "Let's Go Punkar",
        tech: "React Native, Node js, MySql, Express",
        image: '/images/no-image.jpg',
        description: "Application where user will see the PMPML (Pune Transportation) busses schedule, arrivals and search busses for indirect and direct routes in the application",
        type: 'app',
        link: ''
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer)
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.97) {
        setGlitchText(personalInfo.name.split('')
          .map(char => Math.random() > 0.5 ? char : String.fromCharCode(33 + Math.floor(Math.random() * 94)))
          .join(''));
        setTimeout(() => setGlitchText(''), 100);
      }
    }, 100);
    return () => clearInterval(glitchInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-green-400 flex items-center justify-center font-mono">
        <div className="text-center">
          <div className="mb-4">Loading system resources...</div>
          <div className="w-64 h-2 bg-green-900 rounded">
            <div className="h-full bg-green-400 rounded animate-[loading_2s_ease-in-out]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="bg-black border border-green-400 text-green-400 p-6 max-w-2xl mx-auto">
          {selectedProject && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-green-400 hover:text-green-300"
                />
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover mb-4 border border-green-400"
              />
              <div className="space-y-4">
                <p className="text-lg">{selectedProject.description}</p>
                <div className="border-t border-green-400 pt-4">
                  <h3 className="text-lg mb-2">Tech Stack</h3>
                  <p>{selectedProject.tech}</p>
                </div>
                {
                selectedProject.link ?
                  selectedProject.type === "web" ?
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-500"
                    >Link to Project</a> :
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-500"
                    >Link to Application</a>
                    :null
                }
              </div>
              {
                selectedProject.repo ?
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-500"
                  >GitHub Repository</a> : null
              }
            </div>
          )}
        </DialogContent>
      </Dialog>
      <header className="mb-8 border-b border-green-400 pb-4">
        <div className="text-center">
          <h1 className="text-4xl mt-4 mb-2 font-bold">
            {glitchText || personalInfo.name}
          </h1>
          <p className="text-xl">{personalInfo.title}</p>
        </div>
      </header>

      <nav className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'about', icon: User, label: 'About' },
            { id: 'skills', icon: Code, label: 'Skills' },
            { id: 'experience', icon: Briefcase, label: 'Experience' },
            { id: 'projects', icon: Layout, label: 'Projects' },
            { id: 'contact', icon: Mail, label: 'Contact' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setActiveSection(id);
                  setIsLoading(false);
                }, 500);
              }}
              className={`flex items-center gap-2 px-4 py-2 border ${activeSection === id ? 'bg-green-400 text-black' : 'border-green-400'
                } hover:bg-green-400 hover:text-black transition-colors`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto">
        <div className="border border-green-400 p-6 terminal-window">
          <div className="flex items-center gap-2 mb-4 terminal-header">
            <Terminal size={20} />
            <span className="text-sm">portfolio.exe</span>
          </div>

          {activeSection === 'about' && (
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">{'> whoami'}</h2>
              <p className="terminal-text">
                {typedAbout}
                {isTypingAbout && <span className="blink">_</span>}
              </p>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">{'> ls ./skills'}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="border border-green-400 p-2 text-center hover:bg-green-400 hover:text-black transition-colors"
                    style={{ animation: `fadeIn ${(index + 1) * 0.2}s ease-out` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-6">
              <h2 className="text-2xl mb-4">{'> cat experience.log'}</h2>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border border-green-400 p-4 hover:bg-green-400/10"
                  style={{ animation: `slideIn ${(index + 1) * 0.3}s ease-out` }}
                >
                  <h3 className="text-xl mb-2">{exp.company} - {exp.role}</h3>
                  <p className="text-sm mb-2">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">{'> ls ./projects'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative border border-green-400 p-4 overflow-hidden transition-transform transform hover:scale-105 hover:bg-green-400 hover:text-black cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="text-sm">{project.tech}</p>
                      <p className="text-sm line-clamp-2">{project.description}</p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSection === 'contact' && (
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">{'> contact --info'}</h2>
              <div className="space-y-2 typewriter">
                <a href={`mailto:${personalInfo.email}`}>Email: {personalInfo.email}</a>
                <p>Location: {personalInfo.location}</p>
                <p>Mobile: {personalInfo.mob}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a href={personalInfo.linkedin} style={{ display: 'flex', alignItems: 'center' }}>
                    <Linkedin />
                    <p style={{ marginLeft: '8px', marginBottom: 0 }}>LinkedIn/aadilsayyed</p>
                  </a>
                </div><div style={{ display: 'flex', alignItems: 'center' }}>
                  <a href={`${personalInfo.github}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <Github />
                    <p style={{ marginLeft: '8px', marginBottom: 0 }}>GitHub/Aadil009</p>
                  </a>
                </div>
                <div className="mt-4">
                  <p className="blink">_ Ready to connect?</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="mt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.website}</p>
      </footer>

      <style jsx global>{`
        @keyframes loading {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .glitch-text {
          position: relative;
          animation: glitch 0.5s infinite;
        }

        .blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .terminal-window {
          background-color: rgba(0, 0, 0, 0.9);
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
        }

        .terminal-text {
          line-height: 1.6;
        }

        .typewriter {
          overflow: hidden;
          border-right: 2px solid green;
          white-space: nowrap;
          margin: 0;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: green }
        }
      `}</style>
    </div>
  );
};

export default Portfolio