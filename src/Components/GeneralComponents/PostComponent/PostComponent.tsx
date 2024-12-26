import React from "react";
import { FaHeart, FaRegComment, FaShareAlt } from "react-icons/fa";
import "./PostComponent.css";

interface PostProps {
  username: string;
  userProfileImage: string;
  postImage: string;
  caption: string;
  likes: number;
  comments: number;
  time: string;
}

const PostComponent: React.FC<PostProps> = ({
  username,
  userProfileImage,
  postImage,
  caption,
  likes,
  comments,
  time,
}) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="post-user-profile"
          src={userProfileImage}
          alt={username}
        />
        <span className="post-username">{username}</span>
      </div>
      <div className="post-image-container">
        <img className="post-image" src={postImage} alt="Post" />
      </div>

      <div className="post-actions">
        <button className="post-like-btn">
          <FaHeart size={20} />
          <span>{likes} </span>
        </button>
        <button className="post-comment-btn">
          <FaRegComment size={20} />
          <span>{comments} </span>
        </button>
        <button className="post-share-btn">
          <FaShareAlt size={20} />
        </button>
      </div>

      {/* <div className="post-likes">
        <span>{likes} likes</span>
      </div> */}

      <div className="post-caption">
        <span className="post-username">{username}</span> {caption}
      </div>
      {/* <div className="post-comments">
        <span>{comments} comments</span>
      </div> */}
      <div className="post-time">
        <span>{time}</span>
      </div>
    </div>
  );
};

export default PostComponent;
