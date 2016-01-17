const React = require('react');
const sprintf = require('sprintf-js').sprintf;
const TYPES = require('../../types');

class SprintfComponent extends React.Component {
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

SprintfComponent.propTypes = {
  type: React.PropTypes.number,
  i18n: React.PropTypes.object,
};

module.exports = SprintfComponent;
