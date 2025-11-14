export default function TechnologyPage() {
  const features = [
    {
      title: 'AI-Powered Document Analysis',
      description: 'Advanced machine learning algorithms automatically analyze and verify compliance documents',
      icon: 'ri-file-search-line',
      details: [
        'OCR technology for document digitization',
        'Natural language processing for content analysis',
        'Automated compliance checking against regulatory requirements',
        'Real-time validation and error detection'
      ]
    },
    {
      title: 'Real-Time API Integrations',
      description: 'Direct connections to Indian regulatory systems for instant verification',
      icon: 'ri-links-line',
      details: [
        'MCA (Ministry of Corporate Affairs) integration',
        'GSTN (Goods & Services Tax Network) connectivity',
        'BIS (Bureau of Indian Standards) verification',
        'Real-time status updates and notifications'
      ]
    },
    {
      title: 'Blockchain Security',
      description: 'Immutable record keeping and secure document storage',
      icon: 'ri-shield-keyhole-line',
      details: [
        'End-to-end encryption for all data',
        'Blockchain-based audit trails',
        'Secure multi-party document sharing',
        'GDPR and data protection compliance'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-driven insights for market entry strategy and risk assessment',
      icon: 'ri-line-chart-line',
      details: [
        'Market opportunity analysis',
        'Risk scoring for potential partners',
        'Regulatory change predictions',
        'Performance benchmarking'
      ]
    }
  ];

  const security = [
    {
      title: 'Data Encryption',
      description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit',
      icon: 'ri-lock-line'
    },
    {
      title: 'Access Control',
      description: 'Role-based access control with multi-factor authentication',
      icon: 'ri-user-settings-line'
    },
    {
      title: 'Compliance',
      description: 'GDPR, SOC 2, and ISO 27001 compliant infrastructure',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Monitoring',
      description: '24/7 security monitoring with automated threat detection',
      icon: 'ri-eye-line'
    }
  ];

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Technology Platform
            </h1>
            <p className="text-xl text-textDark max-w-3xl mx-auto leading-relaxed">
              Built on cutting-edge technology with enterprise-grade security, our platform 
              automates complex compliance processes and enables seamless cross-border operations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Core Features</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              Advanced AI and automation capabilities designed specifically for EU-India trade compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${feature.icon} text-xl text-primary`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                    <p className="text-textDark mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-textDark">
                          <i className="ri-check-line text-primary mr-2"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Security & Compliance</h2>
            <p className="text-xl text-textDark max-w-3xl mx-auto">
              Enterprise-grade security measures protecting your sensitive business data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {security.map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-background rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-textDark leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}