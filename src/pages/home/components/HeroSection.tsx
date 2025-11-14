
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleExplorePlatform = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Animated Background Ships - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Ship 1 - Moving right */}
        <div className="absolute top-1/4 animate-[shipMove1_60s_linear_infinite] opacity-20">
          <i className="ri-ship-line text-6xl lg:text-8xl text-primary"></i>
        </div>
        
        {/* Ship 2 - Moving left */}
        <div className="absolute top-1/2 right-0 animate-[shipMove2_80s_linear_infinite] opacity-15">
          <i className="ri-ship-line text-5xl lg:text-7xl text-accent"></i>
        </div>
        
        {/* Ship 3 - Moving right */}
        <div className="absolute top-3/4 animate-[shipMove3_100s_linear_infinite] opacity-10">
          <i className="ri-ship-line text-7xl lg:text-9xl text-primary"></i>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/6 left-1/4 animate-pulse opacity-10">
          <i className="ri-global-line text-4xl lg:text-6xl text-accent"></i>
        </div>
        <div className="absolute bottom-1/6 right-1/4 animate-pulse opacity-10 animation-delay-1000">
          <i className="ri-building-line text-3xl lg:text-5xl text-primary"></i>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-primary/10 rounded-full text-primary font-medium text-xs sm:text-sm">
                <i className="ri-rocket-line mr-2"></i>
                Revolutionizing EU-India Business Connections
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-textDark leading-tight">
                The Digital Bridge For{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  EU-India SME Expansion
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-textLight leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empowering European SMEs for seamless market expansion and offshoring—automating compliance, building trust, and connecting you with vetted partners in India and across
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <Button 
                onClick={handleGetStarted}
                className="whitespace-nowrap cursor-pointer text-base lg:text-lg px-6 lg:px-10 py-4 lg:py-5 shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              >
                <i className="ri-rocket-line mr-2"></i>
                Start Your Journey
              </Button>
              <button
                onClick={handleExplorePlatform}
                className="px-6 lg:px-10 py-4 lg:py-5 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-lg font-semibold whitespace-nowrap cursor-pointer text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="ri-search-line mr-2"></i>
                Explore Platform
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-accent/20">
              <div className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 group-hover:scale-110 transition-transform duration-300">€130B+</div>
                <div className="text-sm lg:text-base text-textLight font-medium">EU-India Trade Volume 2025</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 group-hover:scale-110 transition-transform duration-300">79%</div>
                <div className="text-sm lg:text-base text-textLight font-medium">of German companies plan to invest in India by 2030</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 group-hover:scale-110 transition-transform duration-300">€223B</div>
                <div className="text-sm lg:text-base text-textLight font-medium">projected EU-India trade volume by 2032</div>
              </div>
            </div>

            {/* FTA Information */}
            <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <div className="flex items-center justify-center lg:justify-start text-center lg:text-left">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <i className="ri-handshake-line text-xl lg:text-2xl text-primary"></i>
                </div>
                <div>
                  <div className="text-lg lg:text-2xl font-bold text-primary mb-1">EU-India FTA</div>
                  <div className="text-sm lg:text-base text-textLight font-medium">Free Trade Agreement expected to conclude by December 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>
            
            <div className="relative z-10 bg-white/95 backdrop-blur-lg rounded-3xl p-6 lg:p-10 shadow-2xl border border-accent/30 transform hover:scale-105 transition-all duration-500">
              <div className="text-center mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                  <i className="ri-global-line text-2xl lg:text-3xl text-white"></i>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-textDark mb-3 lg:mb-4">
                  Ready to expand your business Globally?
                </h3>
                <p className="text-base lg:text-lg text-textLight leading-relaxed">
                  Join our pilot program and be among the first to experience seamless cross-border partnerships.
                </p>
              </div>
              
              <div className="space-y-4 lg:space-y-5 mb-6 lg:mb-8">
                <div className="flex items-center text-sm lg:text-base text-textLight group hover:text-primary transition-colors duration-300">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <i className="ri-check-line text-primary text-sm lg:text-base"></i>
                  </div>
                  AI-powered partner matching
                </div>
                <div className="flex items-center text-sm lg:text-base text-textLight group hover:text-primary transition-colors duration-300">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <i className="ri-check-line text-primary text-sm lg:text-base"></i>
                  </div>
                  Verified business credentials
                </div>
                <div className="flex items-center text-sm lg:text-base text-textLight group hover:text-primary transition-colors duration-300">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <i className="ri-check-line text-primary text-sm lg:text-base"></i>
                  </div>
                  Streamlined compliance process
                </div>
                <div className="flex items-center text-sm lg:text-base text-textLight group hover:text-primary transition-colors duration-300">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <i className="ri-check-line text-primary text-sm lg:text-base"></i>
                  </div>
                  24/7 multilingual support
                </div>
              </div>

              <Button 
                onClick={handleGetStarted}
                className="w-full text-base lg:text-lg py-3 lg:py-4 whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Now
                <i className="ri-arrow-right-line ml-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
