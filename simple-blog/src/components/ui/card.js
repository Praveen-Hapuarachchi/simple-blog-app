import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className }) => {
  return <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

Card.propTypes = CardHeader.propTypes = CardContent.propTypes = CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
