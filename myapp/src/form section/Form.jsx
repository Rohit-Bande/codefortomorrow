import React from "react";
import style from "./Form.module.css";
import profileimage from "./images/istockphoto-1476170969-1024x1024.jpg";

const Form = () => {
  return (
    <>
      <div className={style.formconstainer}>
        <div className={style.subForm}>
          <div>
            <div className={style.myinfo}>
              <div className={style.myprofileimg}>
                <img src={profileimage} alt="" />
              </div>
              <div className={style.myprofilname}>
                <h2>Hi Reader,</h2>
                <p>Here's your news!</p>
              </div>
            </div>
            <div className={style.feedback}>
              <h1>Have a Feedback?</h1>
              <h2 onClick={() => setView("form")}>we are listening!</h2>
            </div>
          </div>
          <div className={style.formsection}>
            <h1>Thank you so much for taking the time!</h1>
            <p style={{ fontSize: "1.8rem" }}>
              please provide the below details
            </p>
            <form action="">
              <label htmlFor="">First Name</label>
              <input className={style.input} type="text" />
              <label htmlFor="">Last Name</label>
              <input className={style.input} type="text" />
              <label htmlFor="">Address</label>
              <textarea className={style.input} name="" id=""></textarea>
              <label htmlFor="">Country</label>
              <input className={style.input} type="text" />
              <label htmlFor="">Email ID</label>
              <input className={style.input} type="email" />
              <label htmlFor="">Phone Number</label>
              <input className={style.input} type="number" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
