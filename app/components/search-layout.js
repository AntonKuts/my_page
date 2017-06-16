import React, {Component} from 'react';

export default class SerchLayout extends Component {
  render () {
    return(
      <div>
      <div>{this.props.children}</div>
      <footer>Тут может быть Ваша реклама!</footer>
      </div>
    );
  }
};
