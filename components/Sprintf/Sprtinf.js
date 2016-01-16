import React, { Component, PropTypes } from 'react';
import { sprintf } from 'sprintf-js';
import TYPES from '../../types';

export default class SprtinfComponent extends Component {
  constructor(props) {
    super(props);

    this.words = new Map([
      [TYPES.CHOCOLATE, 'chocolate'],
    ]);
  }

  getText(type) {
    return sprintf('I really love %(foodStuff)s', {
      foodStuff: this.words.get(type),
    });
  }

  render() {
    return (
      <div>
        {this.getText(this.props.type)}
      </div>
    );
  }
}

SprtinfComponent.propTypes = {
  type: PropTypes.number,
};
