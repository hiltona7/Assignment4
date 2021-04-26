import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
    render(){
      return (
        <div>
          <h1>{this.props.foot}</h1>
        </div>
      );
    }
};

Footer.propTypes = {
  foot: PropTypes.string.isRequired,
};
