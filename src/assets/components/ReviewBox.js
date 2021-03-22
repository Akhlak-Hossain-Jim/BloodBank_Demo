import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ReplyIcon from "@material-ui/icons/Reply";

function ReviewBox({ avatar, name, time, comment }) {
  return (
    <div className="review_box grid_parent">
      <div className="person_details flex_box">
        <img className="small_avater" src={avatar} alt="" />
        <div className="name_time">
          <h3>{name}</h3>
          <h5>{time}</h5>
        </div>
      </div>
      <div className="review">{comment}</div>
      <div className="flex_box like_reply">
        <div></div>
        <div>
          <ThumbUpIcon className="icons" />
          Like
          <ReplyIcon className="icons" />
          Reply
        </div>
      </div>
    </div>
  );
}

export default ReviewBox;
