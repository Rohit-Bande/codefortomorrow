import React from "react";
import style from "./User.module.css";
import myimage from "./images/istockphoto-1476170969-1024x1024.jpg";

const Userdata = ({ title, body }) => {
  return (
    <>
      <div className={`${style.box}`} style={{ marginTop: "4rem" }}>
        <div className={style.myimg}>
          <img
            src={myimage}
            alt=""
            style={{ width: "8rem", height: "8rem", borderRadius: "50%" }}
          />
        </div>
        <div className={style.myinfo}>
          <h1>{title}</h1>
          <h2>{body}</h2>
          <h4>asdfas</h4>
        </div>
      </div>
    </>
  );
};

export default Userdata;
