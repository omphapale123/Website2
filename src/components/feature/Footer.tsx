
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Technology', href: '/technology' },
      { name: 'Pilot Program', href: '/pilot' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ],
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/offshorebr%C3%BCcke/', icon: 'ri-linkedin-fill' },
      { name: 'Twitter', href: '#', icon: 'ri-twitter-x-fill' },
      { name: 'GitHub', href: '#', icon: 'ri-github-fill' }
    ]
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold font-work-sans">OffshoreBrücke</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base">
              The Digital Bridge for EU–India SME Expansion. Automating compliance, building trust, 
              and enabling seamless cross-border partnerships.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-primary"></i>
                </div>
                <a 
                  href="mailto:offshorebruecke@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  offshorebruecke@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-primary"></i>
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  <a 
                    href="tel:+491739712627" 
                    className="hover:text-white transition-colors duration-200 block sm:inline"
                  >
                    +49 173 9712627
                  </a>
                  <span className="hidden sm:inline mx-2">/</span>
                  <a 
                    href="tel:+919699216625" 
                    className="hover:text-white transition-colors duration-200 block sm:inline"
                  >
                    +91 9699216625
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
            © 2025 OffshoreBrücke. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
