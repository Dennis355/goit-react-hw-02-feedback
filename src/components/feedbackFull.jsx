import React, { Component } from 'react';
import { FeedbackOptions } from 'components/feedbakOptions';
import { Statistics } from 'components/Statistics';
// import ReactDOM from 'react-dom';
import css from 'components/feedbackFull.module.css';

import { Notification } from 'components/Notification';
// import  Statistics  from './Section/Section_statistics';
// import { ReactPropTypes } from 'react';
// console.log(css);
import PropTypes from 'prop-types';
class FeedbackFull extends Component {
  // constructor() {        /// старая запись через конструктор
  //   super();

  //   this.state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // }

  state = {
    /// новая запись через (babel под капотом)
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };
  // static defaultProps = {
  //   /// начальное значение
  //   step: 1, /// как пропс
  // };

  hendlerBtnGood = () => {
    // this.setState({                /// обновл новым значением (не динамич)
    //   good: 1,
    //   });
    //// при динамическом обновлении АКТУАЛЬНОГО состояния а не первоначпльного как функция () => {}
    this.setState(prevState => {
      /// prevState - параметр актуального значения состяния
      return {
        /// возвращаем как обект
        good: prevState.good + 1, /// к текущему состоянию добавляем 1
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
    //  state.good.setState({
    //     value: 555,
    //   });
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    console.log('Увеличили Bad');
  };

  // hendlerDekrement = event => {
  //   console.log('Уменьшили');
  // };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
    // console.log(countTotalFeedback);
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
      // return (this.state.bad + this.state.neutral + this.state.good)/percentage;
      return percentage;
    }
  };

  show = () => {
    // метод, кот просто меняет FALSE  на  true
    this.setState({
      visible: true,
    });
    console.log('SHOW method');
};

hiden = () => {
  // метод, кот просто меняет FALSE  на  true
  this.setState({
    visible: false,
  });
};
  toogle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };


//   toggle = () => {
//     // метод, кот просто меняет true   на   FALSE
//     this.setState({
//       visible: false,
//     });
// };

  render() {
    // const { step } = this.props;

    return (
      <div className={css.div_feedback_full}>
        <div className={css.feedback_title}>
          <h2 className={css.feedback_h2}>
            {' '}
            Please leave feedback from visiting our cafe
          </h2>{' '}
        </div>
        {/* 
        <div className={css.div_counter_feedback}>
          <button
            className={css.button_feedback}
            type="button"
            onClick={this.hendlerBtnGood}
          >
            Good
           
         
          <button
            className={css.button_feedback}
            type="button"
            onClick={this.hendlerBtnNeutral}
          >
            Neutral
          
          </button>
          <button
            className={css.button_feedback}
            type="button"
            onClick={this.hendlerBtnBad}
          >
            Bad
          
          </button>
        </div> */}

        <FeedbackOptions
          good={this.hendlerBtnGood}
          neutral={this.hendlerBtnNeutral}
          bad={this.hendlerBtnBad}
          toggle={this.toogle}
          // show={this.show}
        />
 <div className={css.feedback_title}>
          <h2 className={css.feedback_h2}>
            {' '}
            Statictics
          </h2>{' '}
        </div>

        {this.state.visible ? ( <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiv={this.countPositiveFeedbackPercentage()}
            show={this.show}
          />
         
        ) : ( <Notification message="There is no feedback"></Notification>
         
        )}
         
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
