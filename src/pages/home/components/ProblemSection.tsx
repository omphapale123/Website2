
export default function ProblemSection() {
  const problems = [
    {
      icon: 'ri-file-shield-line',
      title: 'Regulatory Hurdles',
      description: 'Complex compliance requirements across multiple jurisdictions create barriers to entry and slow down expansion timelines.'
    },
    {
      icon: 'ri-user-search-line',
      title: 'Partner Risk',
      description: 'Difficulty in vetting and verifying potential business partners leads to increased risk and uncertainty in partnerships.'
    },
    {
      icon: 'ri-time-line',
      title: 'Slow Onboarding',
      description: 'Manual processes and paperwork delays can extend onboarding from months to years, missing market opportunities.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Expanding into India is Complex — We Simplify It
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            European SMEs face significant challenges when expanding into the Indian market. 
            Our platform addresses these pain points with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-background hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${problem.icon} text-2xl text-accent`}></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{problem.title}</h3>
              <p className="text-textDark leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Visual Separator */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
