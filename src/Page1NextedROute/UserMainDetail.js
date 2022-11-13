import React from "react";

function UserMainDetail({ data, dataid }) {
  // console.log(dataid);
  // console.log(data);

  let Newdata = data.filter((todo) => todo.name == dataid);
  // console.log(Newdata[0]);

  let finalData = Newdata[0];

  console.log(finalData);

  return (
    <div>
      UserMainDetail this is for the single repo
      <h1>{finalData.name}</h1>
    </div>
  );
}

export default UserMainDetail;
