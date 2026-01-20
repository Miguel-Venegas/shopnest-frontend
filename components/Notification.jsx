const Notification = ({ heading, message, type = "success" }) => {
  return (
    <div className={`notification notification-${type}`}>
      <div>
        <span className="notification-title">{heading}</span>
        <p className="notification-message">{message}</p>
      </div>
    </div>
  );
};

export default Notification;