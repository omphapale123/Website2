
import { useEffect, useState } from 'react';

export default function MarketTractionSection() {
  const [counters, setCounters] = useState({
    trade: 0,
    smes: 0,
    growth: 0
  });

  const targetValues = {
    trade: 130,
    smes: 79,
    growth: 125
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key as keyof typeof targetValues];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(interval => interval === intervals[Object.keys(targetValues).indexOf(key)]));
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      value: `€${counters.trade}B+`,
      label: 'EU-India Trade Volume',
      description: 'Annual bilateral trade continues to grow',
      icon: 'ri-exchange-line'
    },
    {
      value: `${counters.smes}%`,
      label: 'SMEs Planning India Investment',
      description: 'European SMEs seeking Indian market entry',
      icon: 'ri-building-2-line'
    },
    {
      value: `${counters.growth}%`,
      label: 'Market Growth Potential',
      description: 'Projected growth in EU-India business partnerships',
      icon: 'ri-line-chart-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powered by Indo-German Momentum
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            The EU-India trade relationship is experiencing unprecedented growth, creating 
            massive opportunities for SMEs ready to expand across borders.
          </p>
        </div>

        {/* FTA Information */}
        <div className="mb-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
              <i className="ri-handshake-line text-2xl text-primary"></i>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">EU-India FTA</div>
              <div className="text-base text-textLight font-medium">Free Trade Agreement expected to conclude by December 2025</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${stat.icon} text-2xl text-primary`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold text-textDark mb-2">{stat.label}</h3>
              <p className="text-sm text-textDark/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Market Opportunity</h3>
              <p className="text-textDark mb-6 leading-relaxed">
                The EU-India trade relationship represents one of the fastest-growing bilateral 
                partnerships globally. With India's digital transformation and Europe's technological 
                expertise, the potential for SME collaboration has never been greater.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-textDark">
                  <i className="ri-check-line text-primary mr-3"></i>
                  Growing demand for European technology in India
                </li>
                <li className="flex items-center text-textDark">
                  <i className="ri-check-line text-primary mr-3"></i>
                  Simplified regulatory frameworks emerging
                </li>
                <li className="flex items-center text-textDark">
                  <i className="ri-check-line text-primary mr-3"></i>
                  Strong government support for bilateral trade
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20growth%20chart%20showing%20EU-India%20trade%20statistics%20and%20market%20expansion%20data%2C%20modern%20infographic%20design%20with%20upward%20trending%20graphs%2C%20clean%20corporate%20visualization%20with%20blue%20and%20silver%20elements&width=500&height=400&seq=market-growth&orientation=landscape"
                alt="Market Growth Visualization"
                className="w-full h-64 object-cover object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
