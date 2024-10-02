import React from "react";
import style from "./Other.module.css";
import myimages from "./images/istockphoto-1476170969-1024x1024.jpg";

const Box = ({ title, body, date }) => {
  return (
    <>
      <div className={style.box}>
        <h1>{title}</h1>
        <p>{body}</p>
        <p>{date}</p>
        <img src={myimages} alt="" />
      </div>
    </>
  );
};

export default Box;
