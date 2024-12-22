import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
    >
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 font-urbanist leading-tight">
            Inspiring young minds, nurturing lifelong learners
          </h1>
          <p className="text-base md:text-lg text-gray-700 font-light font-urbanist">
            At Afatech International School, we are more than just a school. We
            are a community committed to shaping the leaders of tomorrow.
          </p>
          <div className="flex space-x-4 text-xs lg:text-base">
            <a
              href="#about"
              className="flex items-center group bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Learn More
              <ChevronRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-all duration-300"
              />
            </a>
            <a
              href="#admissions"
              className="flex items-center group border border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Enroll Today
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/continental front cover.jpg"
            alt="Afatech International School"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
