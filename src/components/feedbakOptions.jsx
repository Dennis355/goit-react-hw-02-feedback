import React from 'react';
import css from 'components/feedbackFull.module.css'
const FeedbackOptions = ({good, neutral, bad, toggle}) => {
    return ( 
    <div className={css.div_counter_feedback}  >
    <button
      className={css.button_feedback}
      type="button"
      onClick={good && toggle}
      // onClick={toggle}
    >
      Good
      {/* {step} */}
    </button>
    {/* <span className={css.span_counter_statistics}>{this.state.value}</span> */}

    <button
      className={css.button_feedback}
      type="button"
      onClick={neutral && toggle}
    >
      Neutral
      {/* {step} */}
    </button>
    <button
      className={css.button_feedback}
      type="button"
      onClick={bad && toggle } 
    >
      Bad
      {/* {step} */}
    </button>
  </div> )
}
export {FeedbackOptions}; 
