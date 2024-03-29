import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="h-20 flex flex-row bg-[#0d1116] text-white items-center justify-between border-b-[1px] border-[#26507f]">
        <div className="flex flex-row">
          <div className="h-12 w-12 bg-[#0d1116] border-2 rounded-full  border-[#334458] mx-10 overflow-hidden cursor-pointer  hover:translate-y-[-2px] transition-transform">
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt=""
            />
          </div>
          <div className="">
            <input
              type="text"
              className="bg-[#0d1116]  w-[60vw] md:w-[20em] md:hover:w-[60vw]  h-12 rounded-md border-[#334458]  border-2 px-3 text-white transition-all duration-300"
              placeholder="Type @ to filter by people"
            />
          </div>
        </div>
        <div className="h-10 w-10 mx-10 cursor-pointer hover:translate-y-[-2px] transition-transform hidden md:block">
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/speech-bubble--v1.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Header;
