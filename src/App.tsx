import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Brain, Zap, Users, Calendar, MapPin, ChevronDown, DownloadCloud, Download } from 'lucide-react';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, description, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <Icon className={`w-8 h-8 mb-4 transition-colors duration-300 ${isHovered ? 'text-blue-400' : 'text-gray-400'}`} />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: isHovered ? `${level}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tech, link, featured = false }) => {
  return (
    <div className={`group relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 ${featured ? 'border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'border-gray-700/50 hover:border-blue-500/30'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {featured && <span className="px-2 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">Featured</span>}
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span key={idx} className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Project</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, period, description }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900" />
      <div className="absolute left-2 top-6 w-px h-full bg-gray-700 last:hidden" />
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-blue-400 mb-2">{company}</p>
        <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {period}
        </p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Full stack development",
      description: "Developing microservices, API designing and focusing on scalable architecture.",
      level: 90
    },
    // {
    //   icon: Zap,
    //   title: "AI Infrastructure",
    //   description: "Model deployment, optimization, and scaling with cloud platforms",
    //   level: 85
    // },
    {
      icon: Users,
      title: "Leadership",
      description: "Blending deep technical expertise across all layers of a product with clear communication and the ability to mentor others to deliver comprehensive, well-integrated solutions.",
      level: 88
    }
  ];

  const projects = [
    {
      title: "Not disclosed",
      description: "Building my own mobile application.",
      tech: ["Flutter", "Go", "React", "Docker", "AWS"],
      link: "https://github.com/vikastaank",
      featured: true
    }
  ];

  const experiences = [
    {
      title: "Lead Developer",
      company: "Ameriprise Financial",
      period: "Apr 2024 - Present",
      description: "Collaborating with diff teams & contributing to develop reliable, high performance & data intensive web applications & various data analysis utility tools for portfolio managers & other end users"
    },
    {
      title: "Lead Developer",
      company: "Syngenta",
      period: "Mar 2023 - Dec 2023",
      description: "Contributed to build the 'CloudFactory', a utility tool for end users (ops & IT support teams) on which they can manage & request the resources on cloud.* Creates & performs operations on cloud resources programmatically. * Enhanced the performance of the product by 20%, by implementing the concurrent execution of operations and internal cache."
    },
    {
      title: "Sr Member of Technical Staff",
      company: "Lambda Test",
      period: "Aug 2020 - Mar 2023",
      description: "Contributed in developing automation tests execution on Lambda Test, developed deep knowledge on automation and selenium. * Worked upon various architectural & feature changes to Lambda hub to make it more error free & reliable. * Owned and contributed to the 4 micro services responsible for around 1 Lac automation tests execution daily. * Contributed developing the modules & restructured the validations to sanitize the capabilities for 10's of frameworks & browsers. * Led oncall team(4) & achieved to minimize the lambda errors up to 80% while taking customer issues on P0. Involved in rolling out new browsers and selenium versions support on platform. * Managed the critical customer issues triaging & fixes to ease the customer's onboarding. * Heavily involved in POCs for various features across the automation product, worked on various enterprise customer's feature requests."
    },
    {
      title: "Sr. Sofware Developer ",
      company: "Ericsson",
      period: "Nov 2019 - Apr 2020",
      description: "Led for backend services development/enhancements, and services-deployment. * Contributed as a team player in AT&T Telecom project on existing interfacing applications, for the enhancements tasks and bugs solving. * Reduced response time of existing APIs by 20%, and developed a service from scratch for REST APIs."
    },
    {
      title: "Sr. Software Developer",
      company: "HashStudioz Technologies Pvt Ltd erstwhile ecare Technology Labs Pvt Ltd",
      period: "Feb 2016 - Nov 2019",
      description: "Contributed to build a travel domain SaaS product, web services/API integrations for the new suppliers & different service-based projects. * Modified the existing product for enhancements, added new modules & functionalities, keeping the performance of the system intact. * Direct interaction with clients, to discuss on the requirements, and start development as per the requirements gathered. * Led the product development process with a dedicated team and owned deployments. * Meanwhile also worked on different service-based projects for healthcare & education domain."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 relative">
            <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-6 hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
                {/* VT */}
                  <img
                    src="/resources/img/me.jpg" 
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-6"> Hi, my name is </p> 
            <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"> 
              Vikas Taank 
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Developer by profession!
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always enjoying to build something that works on web.
              Currently focusing on building financial utility products & growing at Ameriprise Financial!
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://linkedin.com/in/vikastaank" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-110">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            {/* <a href="https://github.com/vikastaank" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-110">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a> */}
            <a href="mailto:vikas@example.com" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-110">
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            {/* <a href="https://linkedin.com/in/vikastaank" className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-110">
              <Download className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a> */}
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full stack developer with 9+ years of experience, specializing in developing scalable & reliable web applications, from research & prototyping to deployment & scaling. 
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fast-forward to today, and I’ve had the privilege of working at a start-up focusing on travel engine, a start-up focusing on testing and automation stuff, and currently working with a big financial organisation. At my current company, focusing on to build a reliable, efficient & data-intensive web applications for financial industry end users.
            </p>
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span>Noida</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-white">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-blue-400 font-medium">Backend</div>
                  <div className="text-gray-300">Golang, Java, Python</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">Frontend</div>
                  <div className="text-gray-300">React</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">Databases</div>
                  <div className="text-gray-300">MySQL, MongoDB</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">Caching</div>
                  <div className="text-gray-300">Redis</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">Cloud Platforms</div>
                  <div className="text-gray-300">AWS</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">Container & Orchestration</div>
                  <div className="text-gray-300">Docker, K8S</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">System Design</div>
                  <div className="text-gray-300">API Design</div>
                  <div className="text-gray-300">Microservices Architecture</div>
                  <div className="text-gray-300">High Availability & Fault Tolerance</div>
                </div>
                <div>
                  <div className="text-blue-400 font-medium">Leadership</div>
                  <div className="text-gray-300">Technical Strategy & Mentoring, Team Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specializing in developing web applications, reliable & scalable micorsevrices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <SkillCard key={idx} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative AI solutions and cutting-edge machine learning applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      {/* <section className="py-20 px-6 bg-gray-800/30"> */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My journey fast forwarded till today!
            </p>
          </div>
          
          <div className="relative">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-20 px-6"> */}
      <section className="py-20 px-6 bg-gray-800/30"> 
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What’s Next?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Currently not looking for any new opportunities, but my inbox is always open!
            <p>Interested in collaborating on some projects or discussing the latest in product development? </p>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:vikas@example.com" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hi over email!</span>
            </a>
            {/* <a 
              href="https://github.com/vikastaank" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a> */}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Vikas Taank. Built & deployed over weekend!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;