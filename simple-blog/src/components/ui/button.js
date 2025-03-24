import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, className, onClick, variant = 'default', size = 'md', ...props }) => {
  const buttonClasses = classNames(
    'rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2',
    {
      // Size variants
      'px-6 py-3 text-lg': size === 'lg', // Large size button
      'px-4 py-2 text-md': size === 'md', // Default size button
      'px-3 py-1.5 text-sm': size === 'sm', // Small size button

      // Color variants
      'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl': variant === 'default',
      'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl': variant === 'primary',
      'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl': variant === 'success',
      'bg-gradient-to-r from-red-400 to-yellow-500 hover:from-red-500 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl': variant === 'danger',
      'border-2 border-transparent bg-white hover:border-indigo-500 hover:text-indigo-600 shadow-md hover:shadow-lg': variant === 'outline',
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Add size prop validation
};

export default Button;
