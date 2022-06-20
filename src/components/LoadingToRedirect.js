import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/admin");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div style={{ marginTop: "100px", marginLeft: "40%" }}>
      <h4 style={{ marginLeft: "8%", color: "red" }}>You are not logged in</h4>{" "}
      <br />
      <h2>Redirecting you in {count} seconds</h2>
    </div>
  );
};

export default LoadingToRedirect;
