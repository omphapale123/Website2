import { useNavigate } from 'react-router-dom';

export default function SolutionSection() {
  const navigate = useNavigate();

  const handleExploreTechnology = () => {
    navigate('/technology');
  };

  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance Automation',
      description: 'Automated regulatory compliance checks across MCA, GSTN, BIS, and other Indian regulatory bodies.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20compliance%20automation%20dashboard%20with%20checkmarks%20and%20regulatory%20documents%2C%20modern%20interface%20showing%20automated%20verification%20processes%2C%20clean%20professional%20design%20with%20blue%20and%20silver%20accents%2C%20technology%20visualization&width=400&height=300&seq=compliance&orientation=landscape'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Partner Vetting',
      description: 'Machine learning algorithms analyze partner credibility, financial stability, and business reputation.',
      image: 'https://readdy.ai/api/search-image?query=AI%20artificial%20intelligence%20analysis%20interface%20showing%20partner%20verification%20scores%20and%20trust%20metrics%2C%20futuristic%20dashboard%20with%20data%20visualization%2C%20professional%20technology%20design%20with%20steel%20blue%20elements&width=400&height=300&seq=ai-vetting&orientation=landscape'
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Network',
      description: 'Access to verified legal, financial, and business experts familiar with EU-India trade regulations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20expert%20network%20visualization%20showing%20connected%20business%20consultants%20and%20legal%20advisors%2C%20modern%20corporate%20design%20with%20network%20connections%2C%20clean%20interface%20with%20blue%20and%20silver%20tones&width=400&height=300&seq=expert-network&orientation=landscape'
    },
    {
      icon: 'ri-global-line',
      title: 'Cultural Intelligence',
      description: 'Insights into local business practices, cultural nuances, and market-specific requirements.',
      image: 'https://readdy.ai/api/search-image?query=Cultural%20intelligence%20dashboard%20showing%20Indian%20and%20European%20business%20practices%20comparison%2C%20global%20connectivity%20visualization%2C%20professional%20interface%20with%20cultural%20symbols%20and%20modern%20design%20elements&width=400&height=300&seq=cultural-intel&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our RegTech Platform Simplifies Everything
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            Powered by advanced technology and deep market expertise, our platform transforms 
            complex cross-border expansion into a streamlined, automated process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className={`${feature.icon} text-xl text-primary group-hover:text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-textDark leading-relaxed">{feature.description}</p>
                </div>
                <div className="w-full lg:w-48 h-32 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleExploreTechnology}
              className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-right-line mr-2"></i>
              Explore Our Technology
            </button>
            <button 
              className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-gift-line mr-2"></i>
              Benefits of GGC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
