export default function HowItWorksSection() {
  const steps = [
    {
      icon: 'ri-user-add-line',
      title: 'Register & Verify',
      description: 'Create your business profile and complete our AI-powered verification process to ensure credibility and trust.'
    },
    {
      icon: 'ri-search-line',
      title: 'Discover Partners',
      description: 'Use our intelligent matching system to find verified partners that align with your business goals and requirements.'
    },
    {
      icon: 'ri-team-line',
      title: 'Connect & Collaborate',
      description: 'Initiate partnerships through our secure platform with built-in communication and project management tools.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scale & Grow',
      description: 'Leverage our ongoing support and resources to expand your cross-border operations and achieve sustainable growth.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-textDark mb-4">
            How It Works
          </h2>
          <p className="text-xl text-textLight max-w-3xl mx-auto">
            Our streamlined process makes cross-border business partnerships simple, 
            secure, and successful. Get started in just four easy steps.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl border-2 border-accent/20 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto mt-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <i className={`${step.icon} text-3xl text-primary`}></i>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-textDark mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-textLight leading-relaxed text-center">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${i <= index ? 'bg-primary' : 'bg-accent/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connection Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                      <i className="ri-arrow-right-line text-primary text-lg"></i>
                    </div>
                  </div>
                )}

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                      <i className="ri-arrow-down-line text-primary text-lg"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
