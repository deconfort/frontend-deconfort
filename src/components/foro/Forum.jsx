import React from "react";
import CommentForum from "./CommentForum";
import "./forum.css";
import ForumBanner from "../../image/ForumBanner.png";

export default function () {
  return (
    <div className="containerAllForum">
      <img className="forumBanner" src={ForumBanner} alt="Forum banner" />
        <div className="containerAllCards">
      <div className="containerCardsComments">
        <p className="dateForum">Date: 13/12/2022</p>
        <img
          className="imgForum"
          src="https://mymodernmet.com/wp/wp-content/uploads/2022/05/plufl-giant-dog-bed-for-humans-fb.jpg"
          alt="Happy"
        />
        <p className="textForum">
          Now my best friend and I can enjoy sharing some quality time in our
          new favorite place
        </p>
        <div className="userForum">
          <img
            className="imgAvatar"
            src="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"
            alt=""
          />
          <p className="nameForum">Chiara Signori</p>
          <button className="buttonForum">Report</button>
        </div>
      </div>
      <div className="containerCardsComments">
        <p className="dateForum">Date: 13/12/2022</p>
        <img
          className="imgForum"
          src="https://mymodernmet.com/wp/wp-content/uploads/2022/05/plufl-giant-dog-bed-for-humans-fb.jpg"
          alt="Happy"
        />
        <p className="textForum">
          Now my best friend and I can enjoy sharing some quality time in our
          new favorite place
        </p>
        <div className="userForum">
          <img
            className="imgAvatar"
            src="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"
            alt=""
          />
          <p className="nameForum">Chiara Signori</p>
          <button className="buttonForum">Report</button>
        </div>
      </div>      <div className="containerCardsComments">
        <p className="dateForum">Date: 13/12/2022</p>
        <img
          className="imgForum"
          src="https://mymodernmet.com/wp/wp-content/uploads/2022/05/plufl-giant-dog-bed-for-humans-fb.jpg"
          alt="Happy"
        />
        <p className="textForum">
          Now my best friend and I can enjoy sharing some quality time in our
          new favorite place
        </p>
        <div className="userForum">
          <img
            className="imgAvatar"
            src="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"
            alt=""
          />
          <p className="nameForum">Chiara Signori</p>
          <button className="buttonForum">Report</button>
        </div>
      </div>
      <div className="containerCardsComments">
      <p className="dateForum">Date: 13/12/2022</p>
        <img
          className="imgForum"
          src="https://mymodernmet.com/wp/wp-content/uploads/2022/05/plufl-giant-dog-bed-for-humans-fb.jpg"
          alt="Happy"
        />
        <p className="textForum">
          Now my best friend and I can enjoy sharing some quality time in our
          new favorite place
        </p>
        <div className="userForum">
          <img
            className="imgAvatar"
            src="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"
            alt=""
          />
          <p className="nameForum">Chiara Signori</p>
        </div>
        <div className="containerButtonForum">
          <button className="buttonForum">Edit</button>
          <button className="buttonForum">Delete</button>
          <button className="buttonForum">Report</button>
        </div>
      </div>
      </div>
      <CommentForum></CommentForum>
    </div>
  );
}
