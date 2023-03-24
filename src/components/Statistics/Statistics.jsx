import React from 'react';
import css from 'components/FeedbakFull/FeedbackFull.module.css';
// import css from 'components/FeedbackFull/FeedbackFull.module.css'
const Statistics = ({ good, neutral, bad, total, positiv }) => {
  return (
    <div className={css.div_feedback_full}>
     
        <div className={css.div_stat_span_block}>
          <span className={css.statistiks_span}> Good : </span>
          <span className={css.span_counter_statistics}>{good}</span>
        </div>
        <div className={css.div_stat_span_block}>
          <span className={css.statistiks_span}> Neutral : </span>
          <span className={css.span_counter_statistics}>{neutral}</span>
        </div>
        <div className={css.div_stat_span_block}>
          <span className={css.statistiks_span}> Bad : </span>
          <span className={css.span_counter_statistics}>{bad}</span>
        </div>
      
      <div className={css.div_stat_span_block}>
        <span className={css.statistiks_span}> Total : </span>
        <span className={css.span_counter_statistics}>{total}</span>
      </div>
     
      <div className={css.div_stat_span_block}>
        <span className={css.statistiks_span}> Positive feedback : </span>
        <span className={css.span_counter_statistics}>{positiv}</span>
      </div>
    </div>
  );
};
export { Statistics };
