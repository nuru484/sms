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
      ageRange: 'Ages 3 months - 2 years',
      description:
        'Nurturing environment with early developmental activities and personalized care',
      color: 'bg-blue-50',
    },
    {
      title: 'Nursery',
      ageRange: 'Ages 2-3 years',
      description:
        'Interactive learning through play, developing social and motor skills',
      color: 'bg-green-50',
    },
    {
      title: 'Kindergarten',
      ageRange: 'Ages 4-5 years',
      description: 'Foundation in literacy, numeracy, and creative expression',
      color: 'bg-purple-50',
    },
    {
      title: 'Lower Primary (P1-P3)',
      ageRange: 'Ages 6-8 years',
      description:
        'Core subjects with emphasis on reading, writing, and basic mathematics',
      color: 'bg-orange-50',
    },
    {
      title: 'Upper Primary (P4-P6)',
      ageRange: 'Ages 9-11 years',
      description:
        'Advanced core subjects and introduction to specialized topics',
      color: 'bg-pink-50',
    },
    {
      title: 'Junior High School (JHS 1-3)',
      ageRange: 'Ages 12-14 years',
      description: 'Comprehensive curriculum preparing for secondary education',
      color: 'bg-indigo-50',
    },
  ];

  return (
    <div className="bg-white py-16 font-urbanist">
      <div className="container mx-auto px-4 space-y-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            About Afatech International School
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering students through comprehensive education, innovative
            learning, and a commitment to individual growth.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Target size={28} className="mr-3 text-gray-700" />
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              To inspire, educate, and empower students to achieve their fullest
              potential through holistic, student-centered learning.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Target size={28} className="mr-3 text-gray-700" />
              Our Vision
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              To inspire, educate, and empower students to achieve their fullest
              potential through holistic, student-centered learning.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Core Values
            </h4>

            <div className="space-y-3 grid lg:grid-cols-2">
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
        </div>

        {/* Programs Section */}
        <div className="space-y-6 bg-gray-50 p-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <BookOpen size={28} className="mr-3 text-gray-700" />
            Available Classes
          </h3>
          <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${program.color} p-6 rounded-lg hover:shadow-md transition-shadow`}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{program.ageRange}</p>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
