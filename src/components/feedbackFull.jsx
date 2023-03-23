import React, { Component } from 'react';

import { Statistics } from 'components/Statistics';

import css from 'components/feedbackFull.module.css';

import { Notification } from 'components/Notification';

import PropTypes from 'prop-types';
import { Buttons } from 'components/Buttons';
class FeedbackFull extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    console.log(name);
    this.setState(prevState => ({ [name]: prevState[name] + 1 })); /// через вычисляемое значение
    console.log(e);
  };

  hendlerBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });

    console.log('Увеличили Good');
  };

  hendlerBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });

    /////////////// analogi ^^^^ no return   /////////
    // this.setState(prevState =>({

    //     neutral: prevState.neutral + 1,
    //   }));

    console.log('Neutral');
  };
  hendlerBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    console.log('Увеличили Bad');
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage =
      Number(
        (
          (this.state.good /
            (this.state.bad + this.state.neutral + this.state.good)) *
          100
        ).toFixed(0)
      ) + '%';
    if (this.state.bad + this.state.neutral + this.state.good === 0) {
      return 0;
    } else {
      return percentage;
    }
  };

  show = () => {
    this.setState({
      visible: true,
    });
    console.log('SHOW method');
  };

  hiden = () => {
    this.setState({
      visible: false,
    });
  };
  toogle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={css.div_feedback_full}>
        <div className={css.feedback_title}>
          <h2 className={css.feedback_h2}>
            {' '}
            Please leave feedback from visiting our cafe
          </h2>{' '}
        </div>

        <Buttons state={this.state} onClick={this.handleClick} />

        <div className={css.feedback_title}>
          <h2 className={css.feedback_h2}> Statictics</h2>{' '}
        </div>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiv={this.countPositiveFeedbackPercentage()}
            show={this.toggle}
          />
        )}

        {/* ////////////////////////////////////////////////////////////////////////////// */}

        {/* <Notification message="There is no feedback"></Notification> */}
        {/* <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiv={this.countPositiveFeedbackPercentage()}
        /> */}
        {/* 
        <div className={css.statistiks_feedback}>
          <div className={css.div_stat_span_block}>
            <span className={css.statistiks_span}> Good : </span>
            <span className={css.span_counter_statistics}>
              {this.state.good}
            </span>
          </div>
          <div className={css.div_stat_span_block}>
            <span className={css.statistiks_span}> Neutral : </span>
            <span className={css.span_counter_statistics}>
              {this.state.neutral}
            </span>
          </div>
          <div className={css.div_stat_span_block}>
            <span className={css.statistiks_span}> Bad : </span>
            <span className={css.span_counter_statistics}>
              {this.state.bad}
            </span>
          </div>
        </div>
        <div className={css.div_stat_span_block}>
          <span className={css.statistiks_span}> Total : </span>
          <span className={css.span_counter_statistics}>
            {this.countTotalFeedback()}
          </span>
        </div>
        <div className={css.div_stat_span_block}> */}
        {/* <span className={css.statistiks_span}> Positive feedback : </span>
          <span className={css.span_counter_statistics}>
            {this.countPositiveFeedbackPercentage()}
          </span> */}
        {/* </div> */}
      </div>
    );
  }
}
export { FeedbackFull };

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));

FeedbackFull.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
