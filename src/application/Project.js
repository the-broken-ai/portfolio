import React from "react";

function Project({ post }) {
  return (
    <div className="text-white w-full py-3 px-[5vw] md:px-[20vw] ">
      <div className="border-b-[1px] border-[#393a47]">
        <div className="font-bold mt-4 flex flex-row items-baseline">
          <div className="text-2xl">
            <a href={post.github}>{post.title}</a>
          </div>
          <div className="ml-3">
            {/* it is not logging into console */}
            <a href={`/api/users/${post.username}`}>{post.username}</a>
            {console.log(post.github)}
          </div>
        </div>
        <div className="text-l font-bold my-2">{post.content}</div>
      </div>
    </div>
  );
}

export default Project;
