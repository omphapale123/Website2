
export default function TechnologySection() {
  const technologies = [
    {
      name: 'React',
      description: 'Modern frontend framework',
      icon: 'ri-reactjs-line',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      description: 'Scalable backend runtime',
      icon: 'ri-nodejs-line',
      category: 'Backend'
    },
    {
      name: 'PostgreSQL',
      description: 'Robust database system',
      icon: 'ri-database-line',
      category: 'Database'
    },
    {
      name: 'AI/ML',
      description: 'Machine learning algorithms',
      icon: 'ri-brain-line',
      category: 'Intelligence'
    },
    {
      name: 'MCA API',
      description: 'Ministry of Corporate Affairs',
      icon: 'ri-government-line',
      category: 'Integration'
    },
    {
      name: 'GSTN API',
      description: 'Goods & Services Tax Network',
      icon: 'ri-file-text-line',
      category: 'Integration'
    },
    {
      name: 'BIS API',
      description: 'Bureau of Indian Standards',
      icon: 'ri-shield-check-line',
      category: 'Integration'
    },
    {
      name: 'Cloud Security',
      description: 'Enterprise-grade protection',
      icon: 'ri-cloud-line',
      category: 'Security'
    }
  ];

  const principles = [
    {
      title: 'Secure',
      description: 'Enterprise-grade security with end-to-end encryption',
      icon: 'ri-shield-line'
    },
    {
      title: 'Scalable',
      description: 'Built to handle growing business demands',
      icon: 'ri-expand-up-down-line'
    },
    {
      title: 'Smart',
      description: 'AI-powered insights and automation',
      icon: 'ri-lightbulb-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            Built on modern, reliable technologies with direct integrations to Indian 
            regulatory systems for real-time compliance and verification.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-background rounded-xl hover:shadow-lg transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <i className={`${tech.icon} text-xl text-primary group-hover:text-white`}></i>
              </div>
              <h3 className="font-semibold text-primary mb-1">{tech.name}</h3>
              <p className="text-sm text-textDark/70 mb-2">{tech.description}</p>
              <span className="text-xs text-accent font-medium">{tech.category}</span>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${principle.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{principle.title}</h3>
              <p className="text-textDark leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
