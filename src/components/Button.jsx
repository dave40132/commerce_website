import React from 'react';

/**
 * 響應式按鈕組件
 * 
 * 功能特色：
 * - 支援多種視覺樣式變體 (primary, secondary, success, danger, outline)
 * - 支援多種尺寸 (xs, sm, md, lg, xl)
 * - 響應式尺寸調整功能
 * - 觸控優化和按壓效果
 * - 全寬度選項
 * - 無障礙設計支援
 * 
 * @param {ReactNode} children - 按鈕內容（文字、圖標等）
 * @param {string} variant - 按鈕樣式變體，預設為 'primary'
 * @param {string} size - 按鈕尺寸，預設為 'md'
 * @param {function} onClick - 點擊事件處理函數
 * @param {boolean} disabled - 是否禁用按鈕，預設為 false
 * @param {string} className - 額外的 CSS 類別
 * @param {boolean} responsive - 是否啟用響應式尺寸，預設為 false
 * @param {boolean} fullWidth - 是否全寬度顯示，預設為 false
 * @param {object} props - 其他 HTML button 屬性
 */
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
  // 基礎樣式類別 - 包含通用的按鈕樣式
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:ring-4 focus:outline-none active:scale-95 touch-manipulation';
  
  // 按鈕樣式變體定義
  // 每個變體包含顏色、邊框、hover 效果、focus 效果、陰影等
  const variants = {
    // 主要按鈕 - 藍色背景，適用於主要操作
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md hover:shadow-lg',
    
    // 次要按鈕 - 白色背景，適用於次要操作
    secondary: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 shadow-sm hover:shadow-md',
    
    // 成功按鈕 - 綠色背景，適用於確認操作
    success: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-md hover:shadow-lg',
    
    // 危險按鈕 - 紅色背景，適用於刪除等危險操作
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-md hover:shadow-lg',
    
    // 輪廓按鈕 - 透明背景，只有邊框
    outline: 'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 hover:shadow-md',
  };

  // 基本尺寸定義 - 當 responsive=false 時使用
  const sizes = {
    xs: 'px-2 py-1.5 text-xs',      // 超小尺寸
    sm: 'px-3 py-2 text-sm',        // 小尺寸
    md: 'px-5 py-2.5 text-sm',      // 中等尺寸（預設）
    lg: 'px-5 py-3 text-base',      // 大尺寸
    xl: 'px-6 py-3.5 text-base',    // 超大尺寸
  };

  // 響應式尺寸定義 - 當 responsive=true 時使用
  // 使用 Tailwind 的響應式前綴 (sm:, md:, lg:) 來適配不同螢幕尺寸
  const responsiveSizes = {
    // 超小響應式：手機更小，平板以上稍大
    xs: 'px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm',
    
    // 小響應式：手機小尺寸，平板中等尺寸
    sm: 'px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm',
    
    // 中等響應式：平板以上更大的內間距和字體
    md: 'px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base',
    
    // 大響應式：桌機版本會明顯更大
    lg: 'px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base md:px-8 md:py-4',
    
    // 超大響應式：在大螢幕上有最大的尺寸
    xl: 'px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5',
  };

  // 禁用狀態樣式
  // disabled 時移除指標、降低透明度、禁用變形效果
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed transform-none' 
    : 'cursor-pointer';

  // 寬度控制類別
  const widthClasses = fullWidth ? 'w-full' : '';

  // 根據 responsive 參數選擇使用哪套尺寸定義
  const sizeClasses = responsive ? responsiveSizes[size] : sizes[size];

  // 組合所有樣式類別
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