import React, { useContext } from "react";
import "../App.css";
import { RiImageAiLine } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { dataContext } from "../context/UserContext";
import Chat from "./Chat";
const Home = () => {
  let { startRes, setStartRes, popUp, setPopUp } = useContext(dataContext);
  async function handleSubmit(e) {
    e.preventDefault();
    setStartRes(true);
  }
  return (
    <div className="home-page">
      <nav>
        <div className="logo">MASTER_AI_CHAT_BOT</div>
      </nav>
      {!startRes ? (
        <div className="home-body">
          <span id="tag" className="home-body-heading">
            What can i help with ?
          </span>
          <div className="cate">
            <div className="upImg">
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div className="genImg">
              <RiImageAiLine />
              <span>Generate Image</span>
            </div>
            <div className="chat">
              <CiChat1 />
              <span>Let's chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}
      <form className="input-box" onSubmit={(e) => handleSubmit(e)}>
        <div className="popUp">
          <div className="select-up">
            <RiImageAddLine />
            <span>Upload Image</span>
          </div>
          <div className="select-gen">
            {" "}
            <RiImageAiLine />
            <span>Generate Image</span>
          </div>
        </div>
        <button
          id="add"
          onClick={() => {
            setPopUp((prev) => !prev);
          }}
        >
          <FaPlus />
        </button>
        <input type="text" placeholder="Ask Somethings..." />
        <button id="submit">
          <FaArrowUp />
        </button>
      </form>
    </div>
  );
};

export default Home;
