import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Card component
 * @param {string} title - Optional card title
 * @param {React.ReactNode} children - Card body content
 * @param {React.ReactNode} footer - Optional footer content
 * @param {string} className - Extra tailwind classes
 */
const Card = ({ title, children, footer, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
      {footer && (
        <div className="mt-4 border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
