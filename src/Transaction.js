import React from "react";
import "./styles2.css";

export default function Transaction(props) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-category">{props.category}</p>
        <p className="card-amount">{props.amount}</p>
        <p className="card-description">{props.description}</p>
        <p className="card-date">{props.date}</p>
      </div>
    </div>
  );
}
