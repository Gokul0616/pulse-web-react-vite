import React, { useState } from "react";
import "./CurrentPostComments.css";

interface Reply {
  username: string;
  text: string;
  timePosted: string;
}

interface Comment {
  profileImage: string;
  username: string;
  text: string;
  timePosted: string;
  likes: number;
  liked: boolean;
  replies: Reply[];
  repliesVisible: boolean;
}

const comments: Comment[] = [
  {
    profileImage: "https://via.placeholder.com/50",
    username: "@user1",
    text: "This is an amazing post! Keep it up!",
    timePosted: "2 minutes ago",
    likes: 3,
    liked: false,
    replies: [
      {
        username: "@admin",
        text: "Thanks for your feedback!",
        timePosted: "1 minute ago",
      },
    ],
    repliesVisible: false,
  },
  {
    profileImage: "https://via.placeholder.com/50",
    username: "@user2",
    text: "I totally agree with your perspective. Great insights!",
    timePosted: "5 minutes ago",
    likes: 10,
    liked: false,
    replies: [],
    repliesVisible: false,
  },
  {
    profileImage: "https://via.placeholder.com/50",
    username: "@user3",
    text: "Interesting post, but I have a different opinion on this matter.",
    timePosted: "10 minutes ago",
    likes: 0,
    liked: false,
    replies: [],
    repliesVisible: false,
  },
];

const CurrentPostComments: React.FC = () => {
  const [commentList, setCommentList] = useState(comments);

  const handleLike = (index: number) => {
    const updatedComments = [...commentList];
    updatedComments[index].liked = !updatedComments[index].liked;
    updatedComments[index].likes = updatedComments[index].liked
      ? updatedComments[index].likes + 1
      : updatedComments[index].likes - 1;
    setCommentList(updatedComments);
  };

  const handleReplyToggle = (index: number) => {
    const updatedComments = [...commentList];
    updatedComments[index].repliesVisible =
      !updatedComments[index].repliesVisible;
    setCommentList(updatedComments);
  };

  const handleAddReply = (index: number, replyText: string) => {
    if (replyText.trim()) {
      const updatedComments = [...commentList];
      updatedComments[index].replies.push({
        username: "@user",
        text: replyText,
        timePosted: "Just now",
      });
      setCommentList(updatedComments);
    }
  };

  return (
    <div className="current-post-comments">
      <h3>Comments</h3>
      <ul className="comments-list">
        {commentList.map((comment, index) => (
          <li key={index} className="comment-item">
            <img
              src={comment.profileImage}
              alt={`${comment.username}'s profile`}
              className="comment-profile-image"
            />
            <div className="comment-content">
              <span className="comment-username">{comment.username}</span>
              <p className="comment-text">{comment.text}</p>
              <span className="comment-time">{comment.timePosted}</span>
              <div className="comment-actions">
                <button
                  onClick={() => handleLike(index)}
                  className={`like-button ${comment.liked ? "liked" : ""}`}
                >
                  {comment.liked ? "Unlike" : "Like"} ({comment.likes})
                </button>
                <button
                  onClick={() => handleReplyToggle(index)}
                  className="reply-button"
                >
                  Reply ({comment.replies.length})
                </button>
              </div>
              {comment.repliesVisible && (
                <div className="replies">
                  {comment.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="reply-item">
                      <span className="reply-username">{reply.username}</span>
                      <p className="reply-text">{reply.text}</p>
                      <span className="reply-time">{reply.timePosted}</span>
                    </div>
                  ))}
                  <div className="reply-form">
                    <textarea
                      placeholder="Add a reply..."
                      onBlur={(e) => handleAddReply(index, e.target.value)}
                    />
                    <button
                      onClick={() => handleAddReply(index, "New reply text")}
                    >
                      Post Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentPostComments;
