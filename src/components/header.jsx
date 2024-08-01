import React from 'react';

function Header() {
  return (
    <>
    <header className="bg-blue-100 p-4 flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 w-full">
    <div className="flex items-center">
      <img 
        src="https://th.bing.com/th?id=OIP.yXLbhwCDPZC_mINUPFtj6gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      className="h-10 w-auto mr-4" 
      />
      <div className="text-xl font-bold text-white">
        MyWebsite
      </div>
    </div>
    <nav className="space-x-4 flex items-center">
      <a className="link link-hover" href="#">Home</a>
      <a className="link link-hover" href="#">About</a>
      <a className="link link-hover" href="#">Services</a>
      <a className="link link-hover mr-4" href="#">Contact</a>
      <a className="link link-hover ml-6" href="#">Source</a> {/* Added margin-left to move it */}
    </nav>
    <div className="flex items-center space-x-2">
      <input type="text" placeholder="Search..." className="input input-bordered" />
      <button className="btn btn-primary">Search</button>
    </div>
  </header>
  </>
  );
  }

export default Header;