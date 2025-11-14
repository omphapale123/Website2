export default function PilotPage() {
  const benefits = [
    {
      title: 'Early Access',
      description: 'Be among the first to experience our platform with exclusive early access',
      icon: 'ri-vip-crown-line'
    },
    {
      title: 'Dedicated Support',
      description: 'Personal onboarding specialist and priority customer support',
      icon: 'ri-customer-service-line'
    },
    {
      title: 'Reduced Fees',
      description: 'Special pilot pricing with significant discounts on platform fees',
      icon: 'ri-price-tag-line'
    },
    {
      title: 'Direct Feedback',
      description: 'Shape the platform development with your direct input and feedback',
      icon: 'ri-feedback-line'
    }
  ];

  const requirements = [
    {
      title: 'EU-Based SME',
      description: 'Small to medium enterprise based in European Union',
      icon: 'ri-building-line'
    },
    {
      title: 'India Expansion Plans',
      description: 'Concrete plans to expand business operations into India',
      icon: 'ri-global-line'
    },
    {
      title: 'Compliance Readiness',
      description: 'Willingness to work through regulatory compliance requirements',
      icon: 'ri-file-shield-line'
    },
    {
      title: 'Active Participation',
      description: 'Commitment to provide feedback and participate in program activities',
      icon: 'ri-team-line'
    }
  ];

  const timeline = [
    {
      phase: 'Application',
      duration: '1 Week',
      description: 'Submit application and initial company documentation',
      status: 'current'
    },
    {
      phase: 'Review',
      duration: '2 Weeks',
      description: 'Application review and qualification assessment',
      status: 'upcoming'
    },
    {
      phase: 'Onboarding',
      duration: '1 Week',
      description: 'Platform setup and initial compliance roadmap creation',
      status: 'upcoming'
    },
    {
      phase: 'Pilot Program',
      duration: '3 Months',
      description: 'Full platform access with dedicated support and feedback sessions',
      status: 'upcoming'
    }
  ];

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Pilot Program
            </h1>
            <p className="text-xl text-textDark max-w-3xl mx-auto leading-relaxed mb-8">
              Join our exclusive pilot program and be among the first European SMEs to experience 
              seamless expansion into the Indian market with full compliance automation.
            </p>
            <a 
              href="https://calendly.com/offshorebruecke/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-rocket-line mr-2"></i>
              Apply for Pilot Program
            </a>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Program Benefits</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              Exclusive advantages for pilot program participants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-background rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
                <p className="text-textDark leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Eligibility Requirements</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              To ensure program success, we look for companies that meet these criteria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((requirement, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${requirement.icon} text-xl text-primary`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{requirement.title}</h3>
                    <p className="text-textDark leading-relaxed">{requirement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Program Timeline</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              From application to full platform access in just 7 weeks
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/30"></div>

            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-up ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`rounded-2xl p-8 transition-all duration-300 ${
                      phase.status === 'current' 
                        ? 'bg-primary/10 border-2 border-primary' 
                        : 'bg-background hover:shadow-lg'
                    }`}>
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          phase.status === 'current' 
                            ? 'bg-primary text-white' 
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {phase.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">{phase.phase}</h3>
                      <p className="text-textDark leading-relaxed">{phase.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                      phase.status === 'current' ? 'bg-primary' : 'bg-accent'
                    }`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Pilot?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Limited spots available. Apply now to secure your place in our exclusive pilot program.
            </p>
            <a 
              href="https://calendly.com/offshorebruecke/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-send-plane-line mr-2"></i>
              Submit Application
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
