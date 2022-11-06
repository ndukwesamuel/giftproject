import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  let api_url = "https://api.github.com/users/Gift1111";

  const [userdata, setUserdata] = useState(null);

  const HandleCLi = () => {
    navigate = useNavigate();
  };

  async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();

    setUserdata(data);
  }

  useEffect(() => {
    getapi(api_url);

    return () => {};
  }, []);

  return (
    <div>
      {userdata ? (
        <div>
          <h1> {userdata.login}</h1>
          <h1> {userdata.followers}</h1>
          <h1> {userdata.name}</h1>

          <h1>this page is to design the user landing page</h1>

          <div onClick={HandleCLi}>click me</div>

          <Link to="/repo"> click me</Link>
        </div>
      ) : (
        <> it loading </>
      )}
    </div>
  );
}

export default Home;
