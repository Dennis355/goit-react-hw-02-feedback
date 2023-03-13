import React, { Component } from 'react';
import 'components/Dropdown.css';

class Dropdown extends Component {
  state = { visible: false }; /// начальное состояние

  show = () => {
    // метод, кот просто меняет FALSE  на  true
    this.setState({
      visible: true,
    });
};
    hide = () => {
        // метод, кот просто меняет true   на   FALSE
        this.setState({
          visible: false,
        });
  };


//   toogle = () =>{
// this.setState(prevState => ({
//     visible: !prevState.visible,
// }));
//   }


  render() {
    return (
      <div>
          {/* onClick - обработчик клика */}
        <button type="button" className="Dropdown__toggle" onClick={this.show}>
          {' '}
          Показати{' '}
        </button>
        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          {' '}
          Скрити{' '}
        </button>
        {/* рендер по условию (если слева = true && render) если нет, то нет */}
        {this.state.visible && <div className="Dropdown__menu"> випадаюче меню </div>}
        {/* <div className="Dropdown__menu"> випадаюче меню </div> */}
      </div>
    );
  };
};
export { Dropdown };
