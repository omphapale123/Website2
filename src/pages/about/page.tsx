export default function AboutPage() {
  const team = [
    {
      name: 'Devraj Patil',
      role: 'CEO & Co-Founder',
      description: 'B.Sc. Aerospace Engineering\nCo-Founder, XDE Studios Pvt. Ltd. (Media & Tech)\n3 years of team building and scaling experience\nFounder-market fit, India market knowledge, international scaling',
      image: 'https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/9c5cdc29b4681c8393646dfc2e3aa673.jpeg'
    },
    {
      name: 'Jonas Schmidt',
      role: 'CEO & Co-Founder',
      description: 'B.Sc. in Economics\nExp. M.Sc. in Management at TUM\n2.5 Years Marketing Manager\nEx. Head of Product (SAAS)\nAI SAAS startup founder\nTrack and Field coach',
      image: 'https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/3ff8485fa6817b525ad22a303313b4a5.png'
    }
  ];

  const values = [
    {
      title: 'Trust',
      description: 'Building transparent, reliable relationships across borders',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to solve complex problems',
      icon: 'ri-lightbulb-line'
    },
    {
      title: 'Compliance',
      description: 'Ensuring full regulatory adherence in all jurisdictions',
      icon: 'ri-file-shield-line'
    },
    {
      title: 'Partnership',
      description: 'Fostering long-term collaborative relationships',
      icon: 'ri-handshake-line'
    }
  ];

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About OffshoreBrücke
            </h1>
            <p className="text-xl text-textDark max-w-3xl mx-auto leading-relaxed">
              We are bridging the gap between European innovation and Indian opportunity, 
              making cross-border expansion accessible, compliant, and successful for SMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-textDark mb-6 leading-relaxed">
                To democratize cross-border expansion by providing European SMEs with the tools, 
                knowledge, and partnerships needed to successfully enter and thrive in the Indian market.
              </p>
              <p className="text-textDark leading-relaxed">
                We believe that every business, regardless of size, should have access to global 
                opportunities. Our platform removes the traditional barriers of compliance complexity, 
                partner uncertainty, and regulatory confusion that have historically limited SME expansion.
              </p>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20office%20environment%20showing%20diverse%20international%20business%20team%20collaborating%20on%20global%20expansion%20projects%2C%20professional%20workspace%20with%20European%20and%20Indian%20flags%2C%20clean%20corporate%20setting%20with%20technology%20elements&width=600&height=400&seq=mission&orientation=landscape"
                alt="Our Mission"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build relationships 
              with our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-textDark leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Leadership Team</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              Our diverse team combines both market knowledge and business practices 
              with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center bg-background rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-40 h-48 mx-auto mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4 text-lg">{member.role}</p>
                <p className="text-sm text-textDark leading-relaxed whitespace-pre-line">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://readdy.ai/api/search-image?query=Historical%20timeline%20visualization%20showing%20the%20evolution%20of%20EU-India%20trade%20relationships%2C%20modern%20infographic%20design%20with%20milestone%20markers%2C%20professional%20business%20development%20story%20with%20clean%20corporate%20aesthetics&width=600&height=400&seq=story&orientation=landscape"
                alt="Our Story"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-textDark leading-relaxed">
                <p>
                  Founded in 2025 when an Indian Media-Tech founder with industry background, met a German EdTech founder while at an event from UnternehmerTUM in Munich, who witnessed firsthand the challenges European SMEs face when expanding into India, OffshoreBrücke was born from a simple observation: the process was unnecessarily complex and had a lot of friction.
                </p>
                <p>
                  Our founders realized that while large enterprises had the resources to navigate regulatory complexities, SMEs were left behind despite having innovative products and services that could thrive in the Indian market and vice versa.
                </p>
                <p>
                  Today, we're proud to be working with leading institutions like TUM, MIDC, IPI, and ICSI to create a platform that democratizes cross-border expansion and makes the Indian market accessible to European SMEs of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
