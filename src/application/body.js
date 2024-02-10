import React, { useEffect, useState } from "react";
import Project from "./Project.js";

const Body = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/getdata")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[#04080d] text-white h-full w-full  py-4">
      {posts.map((post) => (
        <Project post={post} />
      ))}
    </div>
  );
};

export default Body;
