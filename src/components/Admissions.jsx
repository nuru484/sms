import { FileText, Calendar, AlertCircle, Building } from 'lucide-react';

const Admissions = () => {
  const applicationMethods = [
    {
      icon: <FileText size={24} className="text-gray-700" />,
      title: 'Online Application',
      steps: [
        'Purchase application voucher online',
        'Receive voucher code via email',
        'Complete online application form',
        'Submit required documents electronically',
        'Track application status online',
      ],
    },
    {
      icon: <Building size={24} className="text-gray-700" />,
      title: 'In-Person Application',
      steps: [
        'Visit our administrative office',
        'Purchase physical application form',
        'Complete the application form',
        'Submit form with required documents',
        'Receive acknowledgment slip',
      ],
    },
  ];

  return (
    <div className="bg-white py-16 font-urbanist">
      <div className="container mx-auto px-4 space-y-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our admission process is designed to be straightforward and
            accessible, ensuring every child has the opportunity to receive
            quality education.
          </p>
        </div>

        {/* Application Process Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Calendar size={28} className="mr-3 text-gray-700" />
            Application Process
          </h3>

          <div className="md:flex space-y-6">
            {applicationMethods.map((method, index) => (
              <div key={index} className="space-y-3 md:w-1/2">
                <div className="flex items-center space-x-3">
                  {method.icon}
                  <h4 className="text-xl font-semibold text-gray-800">
                    {method.title}
                  </h4>
                </div>

                <ul className="space-y-2 pl-9">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-gray-600">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <AlertCircle size={28} className="mr-3 text-gray-700" />
            Important Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Required Documents
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Recent passport photographs</li>
                <li>• Birth certificate</li>
                <li>• Previous academic records</li>
                <li>• Immunization records</li>
                <li>• Parent/Guardian ID</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Next Steps
              </h4>
              <div className="space-y-4">
                <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
                  Start Application Process
                </button>
                <button className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-800 hover:bg-gray-50 transition font-semibold">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Need assistance? Contact our Admissions Office
            <br />
            <span className="font-semibold">
              Monday - Friday: 8:00 AM - 4:00 PM
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
