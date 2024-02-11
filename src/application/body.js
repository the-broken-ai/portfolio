import React, { useEffect, useState } from "react";
import Project from "./Project.js";
import Form from "./Form.js";

const Body = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    fetch("/posts/?format=json", {
      headers: {
        Authorization: "Token 3645eaa1b08c5a27041a2f04872bc8efe207a1f4",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[#04080d] text-white h-full w-full  py-4">
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isDropdownOpen && <Form />}
      {!isDropdownOpen &&
        posts.results &&
        posts.results.map((post) => <Project post={post} />)}

      {/* {console.log(posts)} */}
    </div>
  );
};

export default Body;
