import React, { useEffect, useState } from "react";
import style from "./Main.module.css";
import profileimage from "./images/istockphoto-1476170969-1024x1024.jpg";
import { IoImageOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Userdata from "../my data/Userdata";
import Anotherdata from "../my data two/Anotherdata";
import Form from "../form section/Form";

const API = " https://jsonplaceholder.typicode.com/posts";

const Mainpage = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUserdata, setShowUserdata] = useState(true);
  const [view, setView] = useState("userdata");

  const showData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      setMyData(data);
    } catch {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    showData();
  }, []);

  const handleToggle = () => {
    setView((prevView) =>
      prevView === "userdata" ? "anotherdata" : "userdata"
    );
  };

  return (
    <>
      <div className={`container-fluid ${style.maincontainer}`}>
        <div className={style.subcontainer}>
          <div className={style.mysidebar}>
            <div className={style.myinfo}>
              <div className={style.myprofileimg}>
                <img src={profileimage} alt="" />
              </div>
              <div className={style.myprofilname}>
                <h2>Hi Reader,</h2>
                <p>Here's your news!</p>
              </div>
            </div>

            <div className={style.toggleview}>
              <h1>View Toggle</h1>
              <div className={style.togglebtn}>
                <div className={style.firstbtn} onClick={handleToggle}>
                  <IoImageOutline />
                </div>
                <div className={style.secbtn} onClick={handleToggle}>
                  <RxHamburgerMenu />
                </div>
              </div>
            </div>

            <div className={style.feedback}>
              <h1>Have a Feedback?</h1>
              <h2 onClick={() => setView("form")}>we are listening!</h2>
            </div>
          </div>
          <div>
            <div className={style.maincontainers}>
              {loading ? (
                <h1>Loading...</h1>
              ) : view === "userdata" ? ( // Conditional rendering based on the view state
                myData.map((item) => (
                  <Userdata key={item.id} title={item.title} body={item.body} />
                ))
              ) : view === "anotherdata" ? (
                <Anotherdata />
              ) : view === "form" ? (
                <Form />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
