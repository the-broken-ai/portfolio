import React, { useState } from "react";

function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="footer px-10 py-5 md:py-10 flex flex-col justify-center items-center"
      style={{ position: "fixed", right: 0, bottom: 0, width: "10%" }}
    >
      {isDropdownOpen && (
        <div className="dropdown-menu bg-white px-3 rounded-md mb-3 py-3">
          Item 1
          <br />
          Item 2
          <br />
          Item 3
          <br />
          Item 4
          <br />
          Item 5
          <br />
          Item 6
          <br />
        </div>
      )}
      <div
        className="circle rounded-full bg-blue-400 h-12 w-12 bottom-3 border-white cursor-pointer  hover:translate-y-[-2px] transition-transform"
        onClick={toggleDropdown}
      ></div>
    </div>
  );
}

export default Footer;
