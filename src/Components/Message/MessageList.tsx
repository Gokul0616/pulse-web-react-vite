import React, { useState } from "react";
import "./MessageList.css";
import ChatWindow from "./ChatWindow";
import { useNavigate } from "react-router-dom";

interface ChatUser {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  status: string;
}

const MessageList: React.FC = () => {
  const navigation = useNavigate();
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const users: ChatUser[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "10:00 AM",
      status: "Online",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      lastMessage: "Can you send me that file?",
      lastMessageTime: "9:45 AM",
      status: "Offline",
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      lastMessage: "Let’s catch up later!",
      lastMessageTime: "Yesterday",
      status: "Active 1 hour ago",
    },
  ];

  const handleUserClick = (user: ChatUser) => {
    setSelectedUser(user);
    setIsChatOpen(true);
  };

  const handleBackClick = () => {
    setIsChatOpen(false);
  };
  const handleClick = () => {
    navigation("/home");
  };
  return (
    <div className="message-list">
      <div
        className="user-list"
        style={{
          display: isChatOpen && window.innerWidth <= 768 ? "none" : "block",
        }}
      >
        <div className="user-list-header">
          <button className="back-button-list" onClick={handleClick}>
            {"<-"} Back
          </button>
          <h2>Messages</h2>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="user-item"
            onClick={() => handleUserClick(user)}
          >
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-details">
              <p className="user-name">{user.name}</p>
              <p className="last-message">{user.lastMessage}</p>
            </div>
            <p className="last-message-time">{user.lastMessageTime}</p>
          </div>
        ))}
      </div>

      <div
        className={`chat-window ${isChatOpen ? "active" : ""}`}
        style={{
          display: isChatOpen || window.innerWidth > 768 ? "block" : "none",
        }}
      >
        {selectedUser ? (
          <ChatWindow user={selectedUser} onBackClick={handleBackClick} />
        ) : (
          <div className="empty-chat-placeholder">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNvbnZlcnNhdGlvbnxlbnwwfHx8fDE2ODM3MDM5MTU&ixlib=rb-1.2.1&q=80&w=400"
              alt="Chat placeholder"
              className="placeholder-icon"
            />
            <p className="placeholder-text">
              Select a conversation to start chatting!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageList;
