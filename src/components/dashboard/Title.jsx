import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import Typography from './node_modules/@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};