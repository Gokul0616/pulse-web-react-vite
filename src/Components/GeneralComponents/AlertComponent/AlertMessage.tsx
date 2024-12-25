import React from "react";
import "./styles.css";

const AlertMessage = ({
  title,
  content,
  onCancel,
  onAction,
  actionText,
  isLeftButton,
}) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <div className="alert-title">{title}</div>
        <div className="alert-content">{content}</div>
        <div className="alert-buttons">
          <button className="alert-button cancel-button" onClick={onCancel}>
            Cancel
          </button>
          {isLeftButton && (
            <button className="alert-button action-button" onClick={onAction}>
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
