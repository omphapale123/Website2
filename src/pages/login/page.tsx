import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    phoneNumber: '',
    password: '',
    industry: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate all fields
      if (!formData.email || !formData.companyName || !formData.phoneNumber || !formData.industry || !formData.password) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate password length
      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Create form data for submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('companyName', formData.companyName);
      formDataToSubmit.append('phoneNumber', formData.phoneNumber);
      formDataToSubmit.append('industry', formData.industry);
      formDataToSubmit.append('password', formData.password);

      const response = await fetch('https://readdy.ai/api/form/d4b30i3bpm5d1fqikkvg', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        // Navigate to success page
        navigate('/signup-success');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Real Estate',
    'Consulting',
    'Marketing',
    'Transportation',
    'Energy',
    'Agriculture',
    'Entertainment',
    'Government',
    'Non-profit',
    'Other'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img 
              src="https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/a8199948088849e89fd2a9a7b2004f68.png" 
              alt="Offshorebrücke Logo" 
              className="h-24 w-auto mx-auto filter brightness-110 contrast-110 drop-shadow-lg"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-textDark">
            Join Offshorebrücke
          </h2>
          <p className="mt-2 text-sm text-textLight">
            Create your account to get started
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-accent/20">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <i className="ri-error-warning-line text-red-500 mr-2"></i>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form id="user-registration-form" onSubmit={handleSubmit} className="space-y-6" data-readdy-form>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textDark mb-2">
                Email address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-textLight text-lg"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-accent/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Company Name Field */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-textDark mb-2">
                Company name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-building-line text-textLight text-lg"></i>
                </div>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-accent/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-textDark mb-2">
                Phone number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-phone-line text-textLight text-lg"></i>
                </div>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-accent/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="+49 123 456 7890"
                />
              </div>
            </div>

            {/* Industry Field */}
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-textDark mb-2">
                Industry *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-briefcase-line text-textLight text-lg"></i>
                </div>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-8 py-3 border border-accent/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <i className="ri-arrow-down-s-line text-textLight text-lg"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-textDark mb-2">
                Create password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-textLight text-lg"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-accent/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>
              <p className="mt-1 text-xs text-textLight">
                Password must be at least 6 characters
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full whitespace-nowrap" disabled={loading}>
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  'Create account'
                )}
              </Button>
            </div>

            {/* Terms */}
            <p className="text-xs text-textLight text-center">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-200">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-200">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-textLight hover:text-primary transition-colors duration-200"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
