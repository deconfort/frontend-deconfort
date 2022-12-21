import React from "react";
import "./forum.css";
import ForumBanner from "../../image/ForumBanner.png";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../../redux/actions/commentAction";
import Swal from "sweetalert2";
import ComponentModal from "../Modal/Modal";

/* import 'boostrap/dist/css/bootsrap.css' */

export default function Forum() {
  const [open2, setOpen2] = useState(false);
  const { idUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let [reload, setReload] = useState(true);
  const { getComment, deleteComment, editComment } = commentsAction;
  let [comments, setComments] = useState([]);

  const handleOpen2 = () => {
    open2 ? setOpen2(false) : setOpen2(true);
  };
  useEffect(() => {
    getMyComments();
    // eslint-disable-next-line
  }, [reload]);

  const { createComment } = commentsAction;

  let information = useRef();
  let comment = useRef();
  let photo = useRef();

  async function newComment(event) {
    event.preventDefault();
    let newComment = {
      userId: idUser,
      comment: comment.current.value,
      photo: photo.current.value,
      date: new Date(),
    };
    Swal.fire({
      icon: "question",
      title: " Do you want to post a comment?",
      showConfirmButton: true,
      iconColor: "#5c195d",
      confirmButtonColor: "#5c195d",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        let data = {
          token: token,
          data: newComment,
        };
        try {
          await dispatch(createComment(data));
          setReload(!reload);
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "warning",
            confirmButtonColor: "#5c195d",
            iconColor: "#5c195d",
            title: error.response.data.message.join("<br/>"),
            showConfirmButton: true,
          });
        }
      }
      comment.current.value = "";
      photo.current.value = "";
    });
  }
  async function getMyComments() {
    let res = await dispatch(getComment());
    setComments(res.payload.comments);
  }
  async function editComments(event) {
    console.log(event.target.name);
    event.preventDefault();
    let edit = {
      userId: idUser,
      comment: comment.current.value,
      photo: photo.current.value,
      date: new Date(),
    };
    console.log(edit.date);
    Swal.fire({
      icon: "question",
      title: " Do you want to edit this comment?",
      showConfirmButton: true,
      iconColor: "#5c195d",
      confirmButtonColor: "#5c195d",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        let data = {
          id: event.target.name,
          token: token,
          edit: edit,
        };
        try {
          await dispatch(editComment(data));
          setReload(!reload);
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "warning",
            confirmButtonColor: "#5c195d",
            iconColor: "#5c195d",
            title: error.response.data.message.join("<br/>"),
            showConfirmButton: true,
          });
        }
      }
    });
  }

  return (
    
    <div className="containerAllForum">
      <img className="forumBanner" src={ForumBanner} alt="Forum banner" />
      <form className="formForum" onSubmit={newComment} ref={information}>
        <label className="labelCommentForum">
          Image
          <input
            className="inputForum"
            type="text"
            placeholder="Upload your image showing your experience"
            name="photo"
            ref={photo}
          />
        </label>
        <label className="labelCommentForum">
          Comment
          <input
            className="inputForum"
            type="text"
            placeholder="Enter your comment"
            name="comment"
            ref={comment}
          />
        </label>
        <button className="ButtonSendCommentForm" type="submit">
          Send comment
        </button>
      </form>

      <div className="containerAllCards">
        {comments?.map((item) => {
          function deleteFunc() {
            Swal.fire({
              icon: "question",
              title: " Do you want to delete this comment?",
              showConfirmButton: true,
              iconColor: "#5c195d",
              confirmButtonColor: "#5c195d",
              confirmButtonText: "Yes",
              showCancelButton: true,
            }).then(async (result) => {
              if (result.isConfirmed) {
                await dispatch(deleteComment({ idComment: item._id, token }));
              }
              setReload(!reload);
            });
          }
          return (
            <div className="containerCardsComments">
              <p className="dateForum">{`${new Date(
                item.date
              ).toLocaleDateString()}`}</p>
              <img className="imgForum" src={item.photo} alt="Happy" />
              <p className="textForum">{item.comment}</p>
              {/* <Reaction commentId={item.comment._id}/> */}
              <div className="userForum">
                <img className="imgAvatar" src={item?.userId?.photo} alt="" />
                <p className="nameForum">{item?.userId?.name}</p>
                {item.userId?._id === idUser ? (
                  <>
                    <button className="buttonForum" onClick={deleteFunc}>
                      Delete
                    </button>
                    <button className="buttonForum" onClick={handleOpen2}>
                      {open2 ? "Close" : ""}
                      Edit
                    </button>
                    <div>
                      {open2 ? (
                        <form class=" textarea">
                          <div className="div-edit">
                            <input
                              defaultValue={item.comment}
                              className="inputForum"
                              type="text"
                              placeholder="Upload your image showing your experience"
                              name="comment"
                              ref={comment}
                            />

                            <input
                              defaultValue={item.photo}
                              className="inputForum"
                              type="text"
                              placeholder="Enter your comment"
                              name="photo"
                              ref={photo}
                            />

                            <button
                              className="ButtonCommentForm"
                              type="submit"
                              onClick={editComments}
                              name={item._id}
                            >
                              Edit comment
                            </button>
                          </div>
                        </form>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <ComponentModal name={item._id}/>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
