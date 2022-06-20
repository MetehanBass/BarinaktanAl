import React from "react";
import notFound from "../images/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <img src={notFound} style={{ width: "100% " }} alt="Not Found" />
    </div>
  );
};

export default NotFound;
