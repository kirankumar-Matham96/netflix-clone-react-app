import React from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://res.cloudinary.com/do4v7miwh/image/upload/v1642074096/cld-sample.jpg"
        alt="userProfile"
        className=" "
        width="100%"
      />
      <Featured />
    </div>
  );
};

export default Home;
