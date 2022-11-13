import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserMainDetail from "./UserMainDetail";

function UserRepodetail() {
  let navigate = useNavigate();
  let { id } = useParams();
  // console.log(id);
  let api_url = "https://api.github.com/users/Gift1111/repos";
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

  const GetSpecificData = ({ data, dataid }) => {
    console.log(dataid);
    console.log(data);

    if (data) {
      let Newdata = data.filter((todo) => todo.name == dataid);

      console.log(Newdata);
    }

    // let finalData = Newdata[0];
    return <>sam</>;
  };

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
