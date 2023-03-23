import React from 'react';
import css from 'components/feedbackFull.module.css';
const FeedbackOptions = ({ good, neutral, bad, toggle }) => {
  return (
    <div className={css.div_counter_feedback}>
      <button
        name="good"
        className={css.button_feedback}
        type="button"
        onClick={good && toggle}
      >
        Good
      </button>

      <button
        name="neutral"
        className={css.button_feedback}
        type="button"
        onClick={neutral && toggle}
      >
        Neutral
      </button>
      <button
        name="bad"
        className={css.button_feedback}
        type="button"
        onClick={bad && toggle}
      >
        Bad
      </button>
    </div>
  );
};
export { FeedbackOptions };
