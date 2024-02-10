import React, { useEffect, useState } from "react";

function Project() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="text-white w-full py-3 px-[5vw] md:px-[20vw] ">
      <div className="border-b-[1px] border-[#393a47]">
        <div className="font-bold mt-4 flex flex-row items-baseline">
          <div className="text-2xl">Project</div>
          <div className="ml-3">@skunwar9 | @utbshi</div>
        </div>
        <div className="text-xl font-bold my-2">
          {/* Display the fetched users */}
          {/* {users.map((user) => (
            <div key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Project;
