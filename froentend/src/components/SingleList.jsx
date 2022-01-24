import React from "react";

export default function SingleList({ data }) {
  return (
    <div
      style={{ margin: "10px auto", border: "2px solid black" }}
      className="single-list"
    >
      <h5>{data.name}</h5>
      <p>{data.items.join(",")}</p>
      <p>{data.address}</p>
      <p>{data.pincode}</p>
    </div>
  );
}
