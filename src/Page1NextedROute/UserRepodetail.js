import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserMainDetail from "./UserMainDetail";

function UserRepodetail() {
  let navigate = useNavigate();
  let { id } = useParams();
  // console.log(id);

  let api_url = "https://api.github.com/users/ndukwesamuel/repos";

  const [userdata, setUserdata] = useState(null);

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    setUserdata(data);
  }

  useEffect(() => {
    getapi(api_url);

    return () => {};
  }, []);

  const people = [
    {
      name: "James",
      age: 31,
    },
    {
      name: "John",
      age: 45,
    },
    {
      name: "Paul",
      age: 65,
    },
    {
      name: "Ringo",
      age: 49,
    },
    {
      name: "George",
      age: 34,
    },
  ];

  return (
    <div>
      {userdata ? (
        <>
          <UserMainDetail data={userdata} dataid={id} />
        </>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default UserRepodetail;
