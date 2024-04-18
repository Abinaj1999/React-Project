import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="container flex justify-center items-center">
        <div>
          <p className="text-lg">© 2024 MyWebsite. All rights reserved.</p>
        </div>
        <div className="ml-60">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



