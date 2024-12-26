import React, { useState } from "react";
import "./ChatWindow.css";

interface Message {
  text: string;
  sender: "me" | "other";
  timestamp: string;
}

interface ChatUser {
  name: string;
  avatar: string;
  status: string;
}

interface ChatWindowProps {
  user: ChatUser;
  onBackClick: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ user, onBackClick }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey, how are you?", sender: "other", timestamp: "10:00 AM" },
    { text: "I'm good! How about you?", sender: "me", timestamp: "10:02 AM" },
    {
      text: "Doing great, thanks for asking!",
      sender: "other",
      timestamp: "10:03 AM",
    },
  ]);

  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        text: messageInput,
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <button className="back-button" onClick={onBackClick}>
          {"<"} Back
        </button>
        <img src={user.avatar} alt={user.name} className="chat-avatar" />
        <div className="chat-user-info">
          <p className="chat-user-name">{user.name}</p>
          <p className="chat-user-status">{user.status}</p>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              message.sender === "me" ? "chat-sent" : "chat-received"
            }`}
          >
            <p>{message.text}</p>
            <span className="chat-timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className="send-button" onClick={handleSendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
