import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import commentsAction from "../redux/actions/commentAction";
import apiUrl from "../url";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CommentsReported() {
  const { token } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { getComment } = commentsAction;
  let [comments, setComments] = useState([]);
  let [reload, setReload] = useState(true);
  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, [reload]);
  async function getComments() {
    let res = await dispatch(getComment());
    setComments(res.payload.comments);
  }
  console.log(comments);
  let commentsReported = comments.filter(
    (comment) => comment.reports.length >= 1
  );

  async function deleteComment(id) {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    Swal.fire({
      icon: "question",
      title: "Are you sure to delete this comment?",
      showConfirmButton: true,
      iconColor: "#5c195d",
      confirmButtonColor: "#5c195d",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let res = await axios.delete(
            `${apiUrl}api/comments/reports/${id}`,
            headers
          );
          if (res.data.success) {
            Swal.fire({
              icon: "success",
              title: "Reported",
              iconColor: "#5c195d",
              confirmButtonColor: "#5c195d",
              text: res.data.message,
              showConfirmButton: false,
              timer: 2000,
            });
            setReload(!reload);
          }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: true,
                iconColor: "#5c195d",
                confirmButtonColor: "#5c195d",
                confirmButtonText: "Ok",
               
              })
        }
      }
    });
  }

  return (
    <div className="containerAllForum">
      <div className="containerAllCards">
        {commentsReported.map((item) => {
          return (
            <div className="containerCardsComments">
              <p className="dateForum">{`${new Date(
                item.date
              ).toLocaleDateString()}`}</p>
              <img className="imgForum" src={item.photo} alt="Happy" />
              <p className="textForum">{item.comment}</p>
              <div className="userForum">
                <img className="imgAvatar" src={item?.userId?.photo} alt="" />
                <p className="nameForum">{item?.userId?.name}</p>
                <h6>Reports:{item.reports.length}</h6>
                <button
                  className="buttonForum"
                  onClick={() => {
                    deleteComment(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
