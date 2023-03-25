import React from 'react';

import css from 'components/Buttons/Buttons.module.css';

const Buttons = ({ fullBtn, onClick }) => {
  return (
    <div className={css.div_counter_feedback}>
      {fullBtn.map(item => {
        return (
          <li key={item}>
            <button
              type="button"
              name={item}
              onClick={onClick}
              className={css.button_feedback}
            >
              {item}
            </button>
          </li>
        );
      })}
    </div>
  );
};
export { Buttons };
