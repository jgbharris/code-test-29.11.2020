import React from "react";
import "./styles2.css";
import Photo from "./Photo.jpg";

export default function UserCard(props) {
  return (
    <div className="card">
      <img src={Photo} alt="Card image"></img>
    </div>
  );
}
