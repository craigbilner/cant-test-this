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

  getText(i18n, type) {
    return sprintf(i18n.get('foodStuff'), {
      foodStuff: this.words.get(type),
    });
  }

  render() {
    const { i18n, type } = this.props;
    return (
      <div>
        {this.getText(i18n, type)}
      </div>
    );
  }
}

SprtinfComponent.propTypes = {
  type: PropTypes.number,
  i18n: PropTypes.object,
};
