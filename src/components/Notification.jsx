import React from 'react';
import 'components/Notification.css';
const Notification = ({ message }) => {
  return (
    <div className="notofic__block">
      <h3 className="notific__messege"> {message}</h3>
    </div>
  );
};
export { Notification };
