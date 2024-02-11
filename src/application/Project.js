import React, { useEffect, useState } from "react";

function Project({ post }) {
  const [user, setPosts] = useState([]);

  useEffect(() => {
    fetch(post.author, {
      headers: {
        Authorization: "Token 3645eaa1b08c5a27041a2f04872bc8efe207a1f4",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [post.author]);

  return (
    <div className="text-white w-full py-3 px-[5vw] md:px-[20vw] ">
      <div className="border-b-[1px] border-[#393a47]">
        <div className="font-bold mt-4 flex flex-row items-baseline">
          <div className="text-2xl">
            <a href={post.repository}>{post.title}</a>
          </div>

          <div className="ml-3">
            <a href={post.author}>{user.username}</a>
          </div>
          {console.log(user.username)}
        </div>
        <div className="text-l font-bold my-2">{post.content}</div>
      </div>
    </div>
  );
}

export default Project;
