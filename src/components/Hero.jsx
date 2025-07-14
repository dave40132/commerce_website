import React from 'react';
import Button from './Button';

/**
 * Hero 主要展示區域組件
 * 
 * 功能說明：
 * - 電商網站的主要視覺焦點區域
 * - 包含品牌標題、描述文字和主要操作按鈕
 * - 完全響應式設計，適配所有設備尺寸
 * - 在桌面版顯示統計資訊，手機版隱藏以節省空間
 * 
 * 響應式特色：
 * - 標題字體：手機 3xl (30px) → 桌面 7xl (72px)
 * - 間距系統：手機 py-8 → 桌面 py-24
 * - 按鈕布局：手機垂直排列 → 桌面水平排列
 * - 統計資訊：只在中等螢幕以上顯示
 */
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* 主容器 - 響應式內距和最大寬度 */}
      {/* py-8: 手機版垂直內距 32px */}
      {/* sm:py-12: 平板版垂直內距 48px */}
      {/* md:py-16: 筆電版垂直內距 64px */}
      {/* lg:py-20: 桌面版垂直內距 80px */}
      {/* xl:py-24: 大桌面版垂直內距 96px */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-12 md:py-16 lg:py-20 xl:py-24">
        
        {/* 主標題區域 - 響應式字體大小 */}
        {/* text-3xl: 手機版 30px */}
        {/* sm:text-4xl: 平板版 36px */}
        {/* md:text-5xl: 筆電版 48px */}
        {/* lg:text-6xl: 桌面版 60px */}
        {/* xl:text-7xl: 大桌面版 72px */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white sm:mb-6 md:mb-8">
          專業電商平台
        </h1>
        
        {/* 副標題描述 - 響應式文字大小和間距 */}
        {/* text-base: 手機版 16px */}
        {/* sm:text-lg: 平板版 18px */}
        {/* md:text-xl: 筆電版以上 20px */}
        {/* sm:px-8: 平板版左右內距 32px */}
        {/* md:px-16: 筆電版左右內距 64px */}
        {/* lg:px-32: 桌面版左右內距 128px */}
        {/* xl:px-48: 大桌面版左右內距 192px */}
        <p className="mb-6 text-base font-normal text-gray-500 sm:text-lg md:text-xl lg:text-xl sm:px-8 md:px-16 lg:px-32 xl:px-48 dark:text-gray-400 sm:mb-8 md:mb-10">
          探索最新的產品系列，享受優質的購物體驗。我們提供高品質的商品和專業的客戶服務，讓您的購物之旅更加愉快。
        </p>
        
        {/* 主要操作按鈕區域 - 響應式布局 */}
        {/* flex-col: 手機版垂直排列 */}
        {/* sm:flex-row: 平板版以上水平排列 */}
        {/* space-y-3: 手機版垂直間距 12px */}
        {/* sm:space-y-0: 平板版以上取消垂直間距 */}
        {/* sm:space-x-3: 平板版水平間距 12px */}
        {/* md:space-x-4: 筆電版水平間距 16px */}
        {/* lg:space-x-6: 桌面版水平間距 24px */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6">
          
          {/* 主要操作按鈕 - 立即購物 */}
          {/* w-full: 手機版全寬 */}
          {/* sm:w-auto: 平板版以上自動寬度 */}
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            onClick={() => console.log('開始購物')}
          >
            立即購物
            {/* 箭頭圖標 - 響應式尺寸 */}
            <svg className="w-3 h-3 ml-2 sm:w-3.5 sm:h-3.5 sm:ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Button>
          
          {/* 次要操作按鈕 - 了解更多 */}
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            onClick={() => console.log('了解更多')}
          >
            了解更多
          </Button>
        </div>
        
        {/* 統計資訊區域 - 只在中等螢幕以上顯示 */}
        {/* hidden: 預設隱藏 */}
        {/* md:flex: 筆電版以上顯示為flex */}
        {/* mt-12: 筆電版上邊距 48px */}
        {/* lg:mt-16: 桌面版上邊距 64px */}
        {/* xl:mt-20: 大桌面版上邊距 80px */}
        {/* space-x-8: 筆電版水平間距 32px */}
        {/* lg:space-x-12: 桌面版水平間距 48px */}
        <div className="hidden md:flex justify-center mt-12 lg:mt-16 xl:mt-20 space-x-8 lg:space-x-12">
          
          {/* 統計項目 1 - 商品種類 */}
          <div className="text-center">
            {/* 數字 - 響應式字體大小 */}
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
            {/* 描述文字 - 響應式字體大小 */}
            <div className="text-sm lg:text-base text-gray-500 dark:text-gray-400">商品種類</div>
          </div>
          
          {/* 統計項目 2 - 滿意顧客 */}
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">50K+</div>
            <div className="text-sm lg:text-base text-gray-500 dark:text-gray-400">滿意顧客</div>
          </div>
          
          {/* 統計項目 3 - 客戶服務 */}
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
            <div className="text-sm lg:text-base text-gray-500 dark:text-gray-400">客戶服務</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;