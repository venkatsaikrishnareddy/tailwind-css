import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Company Information */}
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <div className="flex items-center mb-2">
            <img 
              src="https://th.bing.com/th?id=OIP.yXLbhwCDPZC_mINUPFtj6gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
              alt="VictorGym Logo" 
              className="h-10 w-auto mr-2" 
            />
            <span className="text-2xl font-bold">VictorGym</span>
          </div>
          <p className="text-gray-400">
            © 2024 VictorGym. All rights reserved.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a className="text-gray-400 hover:text-white" href="#">Home</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">About</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Services</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="w-full sm:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-400 mb-1">1234 Street Name, City, State, 12345</p>
          <p className="text-gray-400 mb-1">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@victorgym.com</p>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
