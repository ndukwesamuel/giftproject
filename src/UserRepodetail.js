import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SingleData({ datamain, iddata }) {
  let TTTT = [
    {
      id: 459816344,
      node_id: "R_kgDOG2g9mA",
      name: "ApiRoute",
      full_name: "ndukwesamuel/ApiRoute",
      private: false,
    },

    {
      id: 448854940,
      node_id: "R_kgDOGsD7nA",
      name: "backend_Blog",
      full_name: "ndukwesamuel/backend_Blog",
      private: false,
    },
  ];

  return (
    <div>
      {TTTT.filter((person) => person.age < 60).map((filteredPerson) => (
        <li>{filteredPerson.name}</li>
      ))}
    </div>
  );
}
function UserRepo() {
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

  return (
    <div>
      {userdata ? (
        <SingleData datamain={userdata} iddata={id} />
      ) : (
        <> it loading </>
      )}
    </div>
  );
}

export default UserRepo;
