import React from "react";
import "./SubscribedAccountsSidebar.css";

interface Account {
  profileImage: string;
  fullName: string;
  username: string;
}

const subscribedAccounts: Account[] = [
  {
    profileImage: "https://via.placeholder.com/50",
    fullName: "John Doe",
    username: "@johndoe",
  },
  {
    profileImage: "https://via.placeholder.com/50",
    fullName: "Jane Smith",
    username: "@janesmith",
  },
  {
    profileImage: "https://via.placeholder.com/50",
    fullName: "Alex Johnson",
    username: "@alexj",
  },
  {
    profileImage: "https://via.placeholder.com/50",
    fullName: "Alpha Michale",
    username: "@alpha36",
  },
];

const SubscribedAccountsSidebar: React.FC = () => {
  return (
    <div className="subscribed-accounts-container">
      <h3>Subscribed Accounts</h3>
      <ul className="account-list">
        {subscribedAccounts.map((account, index) => (
          <li key={index} className="account-item">
            <img
              src={account.profileImage}
              alt={`${account.fullName}'s profile`}
              className="profile-image"
            />
            <div className="account-info">
              <span className="full-name">{account.fullName}</span>
              <span className="username">{account.username}</span>
            </div>
          </li>
        ))}
      </ul>
      <a className="see-all-link">see all</a>
    </div>
  );
};

export default SubscribedAccountsSidebar;
