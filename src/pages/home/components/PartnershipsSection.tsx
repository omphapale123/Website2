
export default function PartnershipsSection() {
  const partners = [
    {
      name: 'TUM',
      description: 'Technical University of Munich',
      logo: 'ri-graduation-cap-line',
      category: 'Academic'
    },
    {
      name: 'IPI',
      description: 'Indian Plastics Institute',
      logo: 'ri-building-line',
      category: 'Industry'
    },
    {
      name: 'UnternehmerTUM',
      description: 'Start-up Launchpad',
      logo: 'ri-rocket-line',
      category: 'Innovation'
    }
  ];

  const achievements = [
    {
      title: 'Pilot Program Launch',
      description: 'Successfully validated with 25+ European SMEs',
      icon: 'ri-rocket-line'
    },
    {
      title: 'Advised By',
      description: 'Key people from ICSI ( The Institute of Company Secretaries of India) ',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Experts In Indian Industry',
      description: 'With 30+ years experience',
      icon: 'ri-check-double-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-handshake-line text-3xl text-primary"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pilot & Partnerships
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            Backed by leading trade institutions and supported by government offices, our platform has been validated through strategic partnerships, and we are open for more collaborative support.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${partner.logo} text-2xl text-primary`}></i>
              </div>
              <h3 className="font-bold text-primary mb-2">{partner.name}</h3>
              <p className="text-sm text-textDark mb-3">{partner.description}</p>
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${achievement.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{achievement.title}</h3>
              <p className="text-textDark leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
