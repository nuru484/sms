import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white text-xs">
      <div className="container font-extralight py-2 px-4 flex flex-wrap justify-center items-center md:flex-nowrap md:justify-between mx-auto">
        <div className="flex flex-wrap items-center justify-center space-x-4 p-2">
          <div className="flex  items-center space-x-2">
            <Phone size={16} />
            <span>+88 017 1191 383</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>company@mail.com</span>
          </div>
        </div>

        <div className="flex justify-evenly w-full md:w-auto md:justify-normal items-center space-x-4 p-2">
          <button className="text-gray-400 hover:text-white">Apply</button>
          <button className="text-gray-400 hover:text-white">Login</button>
          <button className="text-gray-400 hover:text-white">Live Chat</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
