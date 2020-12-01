import React from "react";
import "./styles.css";
import Photo from "./Photo.jpg";

export default function UserCard(props) {
  return (
    <div className="user-card" >
      <img src={Photo} alt="user-profile"></img>
    </div>
  );
}
