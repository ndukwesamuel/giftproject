import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserRepo() {
  let navigate = useNavigate();
  let api_url = "https://api.github.com/users/Gift1111/repos";

  const [userdata, setUserdata] = useState(null);

  const HandleCLi = () => {
    navigate = useNavigate();
  };

  async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    setUserdata(data);
  }
  // Calling that async function

  useEffect(() => {
    getapi(api_url);

    return () => {};
  }, []);

  return (
    <div>
      {userdata ? (
        <div className="repoWrapper ">
          {userdata.map((item) => {
            const { avatar_url, id, name, owner, description } = item;

            return (
              <div className="debug repoWrapper_main">
                name{id}
                <h3>Project Title - {name}</h3>
                <h4>Project Description - {description}</h4>
                <h4> Project Creattor - {owner.login}</h4>
                <Link to={`/repo/${id}`}> view more about the project </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <> it loading </>
      )}
    </div>
  );
}

export default UserRepo;
