import React from 'react';
import {FeedbackFull} from 'components/feedbackFull'
// import {Dropdown} from 'components/Dropdown'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
      <FeedbackFull />
      {/* <Dropdown /> */}
    </div>
  );
};
