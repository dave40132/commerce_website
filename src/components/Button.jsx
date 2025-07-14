import React from 'react';

/**
 * 響應式按鈕組件
 * 
 * @param {Object} props - 組件屬性
 * @param {React.ReactNode} children - 按鈕內容
 * @param {string} variant - 按鈕樣式變體 ('primary', 'secondary', 'success', 'danger', 'outline')
 * @param {string} size - 按鈕尺寸 ('xs', 'sm', 'md', 'lg', 'xl')
 * @param {Function} onClick - 點擊事件處理函數
 * @param {boolean} disabled - 是否禁用按鈕
 * @param {string} className - 額外的CSS類名
 * @param {boolean} responsive - 是否啟用響應式尺寸調整
 * @param {boolean} fullWidth - 是否為全寬按鈕
 * @param {Object} props - 其他傳遞給button元素的屬性
 */
const Button = ({ 
  children, 
  variant = 'primary',      // 預設為主要按鈕樣式
  size = 'md',             // 預設為中等尺寸
  onClick, 
  disabled = false,        // 預設不禁用
  className = '',          // 預設無額外類名
  responsive = false,      // 預設不啟用響應式尺寸
  fullWidth = false,       // 預設不為全寬
  ...props 
}) => {
  // 基礎樣式類 - 包含所有按鈕的共同樣式
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:ring-4 focus:outline-none active:scale-95 touch-manipulation';
  
  // 按鈕變體樣式 - 定義不同類型按鈕的顏色和效果
  const variants = {
    // 主要按鈕 - 藍色背景，適用於主要操作
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md hover:shadow-lg',
    
    // 次要按鈕 - 白色背景帶邊框，適用於次要操作
    secondary: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 shadow-sm hover:shadow-md',
    
    // 成功按鈕 - 綠色背景，適用於確認操作
    success: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-md hover:shadow-lg',
    
    // 危險按鈕 - 紅色背景，適用於刪除等危險操作
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-md hover:shadow-lg',
    
    // 輪廓按鈕 - 透明背景帶彩色邊框，適用於輔助操作
    outline: 'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 hover:shadow-md',
  };

  // 基本尺寸設定 - 固定尺寸，不會隨螢幕大小改變
  const sizes = {
    xs: 'px-2 py-1.5 text-xs',      // 超小：適用於緊湊空間
    sm: 'px-3 py-2 text-sm',        // 小：適用於表格或卡片
    md: 'px-5 py-2.5 text-sm',      // 中：預設尺寸，適用於大部分情況
    lg: 'px-5 py-3 text-base',      // 大：適用於重要操作
    xl: 'px-6 py-3.5 text-base',    // 超大：適用於hero區域或主要CTA
  };

  // 響應式尺寸設定 - 會根據螢幕尺寸自動調整
  // 格式：基礎尺寸 sm:平板尺寸 md:筆電尺寸 lg:桌機尺寸
  const responsiveSizes = {
    // 響應式超小尺寸：手機xs → 平板sm
    xs: 'px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm',
    
    // 響應式小尺寸：手機xs → 平板sm
    sm: 'px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm',
    
    // 響應式中尺寸：手機sm → 平板md → 桌機lg
    md: 'px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base',
    
    // 響應式大尺寸：手機sm → 平板lg → 桌機xl
    lg: 'px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base md:px-8 md:py-4',
    
    // 響應式超大尺寸：手機lg → 平板xl → 桌機2xl
    xl: 'px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5',
  };

  // 禁用狀態樣式
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed transform-none'  // 禁用時：半透明、禁止游標、取消動畫
    : 'cursor-pointer';                               // 正常時：指針游標

  // 寬度控制類
  const widthClasses = fullWidth ? 'w-full' : '';    // 全寬或預設寬度

  // 根據是否啟用響應式來選擇尺寸類
  const sizeClasses = responsive ? responsiveSizes[size] : sizes[size];

  // 組合所有CSS類名
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