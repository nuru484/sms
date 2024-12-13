import React from 'react';
import { Target, Award, Globe, BookOpen, Users } from 'lucide-react';

const AboutUs = () => {
  const coreValues = [
    {
      icon: <Target size={24} className="text-gray-700" />,
      title: 'Integrity',
      description:
        'We uphold the highest standards of honesty and ethical behavior.',
    },
    {
      icon: <Award size={24} className="text-gray-700" />,
      title: 'Excellence',
      description:
        'We strive for outstanding performance in all our endeavors.',
    },
    {
      icon: <Globe size={24} className="text-gray-700" />,
      title: 'Inclusivity',
      description:
        'We embrace diversity and create a welcoming environment for all.',
    },
    {
      icon: <BookOpen size={24} className="text-gray-700" />,
      title: 'Innovation',
      description:
        'We continuously adapt and explore new approaches to learning.',
    },
    {
      icon: <Users size={24} className="text-gray-700" />,
      title: 'Respect',
      description:
        "We value every individual's unique potential and perspective.",
    },
  ];

  const programs = [
    {
      title: 'Creche',
      description:
        'Safe, stimulating care for toddlers with early learning activities.',
      color: 'bg-blue-50',
    },
    {
      title: 'Primary School',
      description:
        'A strong foundation in literacy, numeracy, and critical thinking.',
      color: 'bg-green-50',
    },
    {
      title: 'Junior High School',
      description: 'Advanced academic and practical skills for future success.',
      color: 'bg-purple-50',
    },
  ];

  return (
    <div className="bg-white py-16 font-urbanist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            About Afatech International School
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering students through comprehensive education, innovative
            learning, and a commitment to individual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Target size={28} className="mr-3 text-gray-700" />
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              To inspire, educate, and empower students to achieve their fullest
              potential through holistic, student-centered learning.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Core Values
            </h4>
            <div className="space-y-3">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {value.icon}
                  <div>
                    <h5 className="font-semibold text-gray-800">
                      {value.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <BookOpen size={28} className="mr-3 text-gray-700" />
              Our Programs
            </h3>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`${program.color} p-6 rounded-lg hover:shadow-md transition-shadow`}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {program.title}
                  </h4>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
