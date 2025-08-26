import { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Star,
  ArrowRight,
  Download,
  Send
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = [
    { name: 'React/Next.js', icon: Code, level: 80 },
    { name: 'TypeScript', icon: Code, level: 85 },
    { name: 'Node.js', icon: Database, level: 85 },
    { name: 'Python', icon: Code, level: 80 },
    { name: 'Java', icon: Code, level: 75 },
    { name: 'Cloud services', icon: Globe, level: 82 },
  ];

  const experiences = [
    {
      title: 'Data Analytics & Visualization (Job simulation)',
      company: 'Accenture',
      period: 'MAY 2024 ',
      description: 'Developed data-driven insights using visualization tools. Created interactive dashboards for real-time data analysis.',
      achievements: [ 'Automated data reporting processes', 'Enhanced data accuracy by 40%', 'Presented findings to stakeholders']
    },
    {
      title: 'Full Stack Developer (Internship)',
      company: 'Biztron SoftTech,',
      period: 'JUN 2024 - JUL 2024',
      description: 'Developed responsive web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams.',
      achievements: ['Built an interactive application', 'Improved code quality by 35%',]
    },
    {
      title: 'Web Development (Internship)',
      company: 'Enrivolv IT Solutions',
      period: 'MAY 2024 - AUG 2024',
      description: 'Designed and implemented user-friendly interfaces using HTML, CSS, and JavaScript. Assisted in backend development with Node.js.',
      achievements: ['Optimized website performance', 'Increased user engagement by 25%']
     
    }
    
  ];

  const projects = [
    {
      title: 'Food delivery Application',
      description: 'Full-stack food delivery applicaton , its a restaurant based app. solution with React, Node.js. Features include real-time inventory, payment processing, and admin dashboard.',
      image: './public/food.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/sumanth44/sarvi.git',
      live: 'https://example.com'
    },
    {
      title: 'Dynamic, Editable Website Template Generator',
      description: 'ContentQL is a platform that empowers developers to create, customize, and share dynamic website themes effortlessly. It features a user-friendly interface for theme customization, real-time previews, and a library of pre-built components.',
      image: './public/vnr.jpg',
      tags: ['React.js', 'TypeScript', 'Prisma', 'FalAPI'],
      github: 'https://github.com/sumanth44/VNR-DESIGN-A-THON25.git',
      live: 'https://example.com'
    },
    {
      title: 'Cooking book',
      description: ' A comprehensive cooking book application that allows users to explore, create, and share recipes. It features a user-friendly interface, recipe categorization, and a community-driven platform for sharing culinary creations.',
      image: './public/cooking.webp',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://sumanth44.github.io/Cookingbook/'
    }
  ];

  const certificates = [
    { name: 'Solutions Architecture', issuer: 'Amazon (AWS)', year: '2025' },
    { name: 'ReactWeb DeveloperCertification', issuer: 'Infosys SpringBoard', year: '2024' },
    { name: 'Introduction ToCloud Computing', issuer: 'IBM', year: '2024' },
    { name: 'Introduction ToData Science With Python', issuer: 'Harvard University', year: '2024' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-colors duration-300 hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 animate-pulse"></div>
        <div className="text-center z-10 px-6 animate-in">
          <div className="mb-8 relative">
        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <img 
          src="./public/profile.jpg" 
          alt="Profile" 
          className="w-44 h-44 rounded-full object-cover"
            />
          </div>
        </div>
          </div>
          <h1 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
        Sumanth Reddy G
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
        Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-400">
        Crafting digital experiences that blend creativity with functionality. 
        Passionate about building scalable applications and beautiful user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="./public/resume.pdf"
          download
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download Resume
        </a>
        <a 
          href="#contact" 
          className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
        >
          Get In Touch
          <ArrowRight size={20} />
        </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm currently a student , pursuing my B.Tech in Computer Science and Engineering at LBRCE , AP . I've developed a strong foundation in full stack development, specializing in React, Node.js, and cloud technologies. My passion lies in creating innovative digital solutions that enhance user experiences and drive business success. 
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:bg-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Certificates & Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{cert.name}</p>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover:bg-white/10"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-6 flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-purple-400 text-lg">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">Some of my recent work that I'm proud of</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:bg-white/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.title === 'Cooking book' && (
                      <a 
                        href={project.live}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {/* <a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">Ready to work together? Let's create something amazing!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <span>sumanthreddy.guntaka@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <span>+91 7842822569</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <span>Vijayawada , AP , India</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 text-purple-400 mr-4" />
                    <a href="https://www.linkedin.com/in/sumanth-reddy-guntaka-3a0899336/" className="hover:text-purple-400 transition-colors duration-300">
                      linkedin.com/Sumanth Reddy Guntaka
                      
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Available For</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Full-time opportunities</p>
                  <p>• Freelance projects</p>
                  <p>• Consulting work</p>
                  <p>• Collaborative partnerships</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sumanth Reddy G
              </h3>
              <p className="text-gray-400">
                Full Stack Developer passionate about creating innovative digital solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">About</a>
                <a href="#experience" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Experience</a>
                <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/sumanth44" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sumanth-reddy-guntaka-3a0899336/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sumanthreddy.guntaka@gmail.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sumanth Reddy Guntaka.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;