import React from "react";

function UserMainDetail({ data, dataid }) {
  console.log(dataid);
  let sam = data.filter((item) => item.fork === true);
  console.log(sam);
  return <div>UserMainDetail</div>;
}

export default UserMainDetail;
