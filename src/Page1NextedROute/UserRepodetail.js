import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserRepodetail() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

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
  }, [api_url]);

  let MMM = userdata;

  console.log(MMM);

  return <div>kaka</div>;
}

export default UserRepodetail;
