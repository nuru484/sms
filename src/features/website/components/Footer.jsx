import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-urbanist">
      <div className="container mx-auto p-4 space-y-6">
        {/* Social Media and Branding Section */}

        <div className="border-b border-gray-700 md:flex justify-between px-4 py-8">
          <div className="flex items-center gap-2">
            <img
              src="/icon.jpg"
              alt="Afatech International School"
              className="h-12 inline-block"
            />
            <h1 className="text-xl font-semibold">
              AFATECH INTERNATIONAL SCHOOL
            </h1>
          </div>

          <div className="flex items-center gap-5 my-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon strokeWidth={0.85} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="text-sm grid md:grid-cols-3 gap-6 px-4 space-y-6 md:space-y-0">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-4 col-span-2">
            <div>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8360913158354!2d-122.70776848467702!3d38.34066447966086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808422a92a6beaf3%3A0xc4d4a3f5b8903b24!2s7165%20Burton%20Ave%2C%20Rohnert%20Park%2C%20CA%2094928%2C%20USA!5e0!3m2!1sen!2sin!4v1679631714387!5m2!1sen!2sin"
                width="100%"
                height="220"
                allowFullScreen=""
                loading="lazy"
                className="border"
              ></iframe>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Contact Us</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="leading-relaxed">7165 Burton Avenue</p>
                    <p className="leading-relaxed">Rohnert Park, CA 94928</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p>707-792-4700</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p>info@afatechschool.com</p>
                </div>

                <a
                  href="#"
                  className="inline-block text-white hover:text-gray-300 transition-colors duration-200 font-semibold"
                >
                  Career Opportunities →
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white ">Quick Links</h2>
            <ul className="space-y-3">
              {[
                'Admissions',
                'Academic Programs',
                'School Calendar',
                'Family Resources',
                'Student Portal',
                'Parent Portal',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="text-gray-400 mr-2">•</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-700 text-xs space-y-2 pt-3 px-4">
          <div className="md:flex items-center justify-between">
            <p className="py-2">
              © {new Date().getFullYear()} Afatech International School. All
              rights reserved.
            </p>
            <div className="flex gap-2 justify-center py-2">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Accessibility
              </a>
            </div>
          </div>

          <div className="text-center md:text-left text-gray-500">
            <p>
              Powered By{' '}
              <a
                href="https://portfolio-nurus-projects-d98f949e.vercel.app/"
                target="_blank"
              >
                Afatech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
