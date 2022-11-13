import React from "react";

function UserMainDetail({ data, dataid }) {
  // console.log(dataid);
  // console.log(data);

  let Newdata = data.filter((todo) => todo.name == dataid);
  // console.log(Newdata[0]);

  let finalData = Newdata[0];

  console.log(finalData);

  const {
    name,
    allow_forking,
    archive_url,
    branches_url,
    blobs_url,
    archived,
    assignees_url,
  } = finalData;

  return (
    <div>
      UserMainDetail this is for the single repo
      <h1>{name}</h1>
      <p>{allow_forking}</p>
      <p>{archived}</p>
      <p>{assignees_url}</p>
      <p>{blobs_url}</p>
      <p>{branches_url}</p>
    </div>
  );
}

export default UserMainDetail;
