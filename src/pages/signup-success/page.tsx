
import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function SignupSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
          <i className="ri-check-line text-4xl text-green-600"></i>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="inline-block">
            <img 
              src="https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/a8199948088849e89fd2a9a7b2004f68.png" 
              alt="Offshorebrücke Logo" 
              className="h-20 w-auto mx-auto filter brightness-110 contrast-110 drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent/20">
          <h1 className="text-3xl font-bold text-textDark mb-4">
            Thank You!
          </h1>
          <h2 className="text-xl font-semibold text-primary mb-6">
            We will keep you updated
          </h2>
          
          <p className="text-textLight mb-8 leading-relaxed">
            Your registration has been successfully submitted. Our team will review your information and get back to you soon with updates about Offshorebrücke's digital bridge platform.
          </p>

          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full whitespace-nowrap">
                <i className="ri-home-line mr-2"></i>
                Back to Home
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" className="w-full whitespace-nowrap">
                <i className="ri-information-line mr-2"></i>
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-textLight">
          <p>
            Questions? Contact us at{' '}
            <a href="mailto:info@offshorebrucke.com" className="text-primary hover:text-primary/80 transition-colors duration-200">
              info@offshorebrucke.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
