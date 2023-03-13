import React from 'react';
import 'components/Notification.css';
const Notification = ({ message }) => {
  return (
    <div className='notofic__block'   >
      <h3 className="notific__messege"> {message}</h3>
      {/* <Notification message="There is no feedback"></Notification> */}
    </div>
  );
};
export { Notification };
