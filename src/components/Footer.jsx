import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: '#' },
    { icon: <FaTwitter size={20} />, url: '#' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/raju-chowdavada-06b734347/' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/_lovely__raju_/' },
  ];

  return (
    <footer className="w-full py-8 text-gray-900 dark:text-white mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Heading */}
          <div className="relative mb-6 pb-4">
            <h5 className="text-xl font-bold relative z-10">
              Passion for Technology
            </h5>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-6"></div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-lg mx-auto">
            Innovation distinguishes between a leader and a follower. We build solutions that matter and create digital experiences that users love.
          </p>

          <div className="flex space-x-4 mt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="mt-8 text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Raju Chowdavada. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;