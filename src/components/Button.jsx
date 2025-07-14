import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  className = '',
  responsive = false,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:ring-4 focus:outline-none active:scale-95 touch-manipulation';
  
  const variants = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md hover:shadow-lg',
    secondary: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 shadow-sm hover:shadow-md',
    success: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-md hover:shadow-lg',
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-md hover:shadow-lg',
    outline: 'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 hover:shadow-md',
  };

  // 基本尺寸
  const sizes = {
    xs: 'px-2 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base',
  };

  // 響應式尺寸（當 responsive=true 時使用）
  const responsiveSizes = {
    xs: 'px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm',
    sm: 'px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm',
    md: 'px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base',
    lg: 'px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base md:px-8 md:py-4',
    xl: 'px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5',
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed transform-none' 
    : 'cursor-pointer';

  const widthClasses = fullWidth ? 'w-full' : '';

  const sizeClasses = responsive ? responsiveSizes[size] : sizes[size];

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizeClasses} ${disabledClasses} ${widthClasses} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;