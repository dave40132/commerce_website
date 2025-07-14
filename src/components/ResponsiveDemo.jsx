import React from 'react';
import Button from './Button';

/**
 * 響應式設計展示組件
 * 
 * 功能說明：
 * - 展示網站的響應式設計功能和特色
 * - 包含設備尺寸說明、響應式元素示範
 * - 提供互動式的 RWD 測試和展示
 * - 教育用戶如何測試響應式功能
 * 
 * 展示內容：
 * - 設備斷點和布局說明
 * - 響應式按鈕功能展示
 * - 文字大小自動調整示範
 * - 間距系統展示
 * - 設備可見性控制示範
 * - 測試指南和操作說明
 * 
 * 可自訂修改的地方：
 * - 設備資訊：修改設備尺寸和說明
 * - 展示內容：新增或修改展示區塊
 * - 按鈕範例：調整按鈕樣式和功能
 * - 說明文字：修改各區塊的描述內容
 */
const ResponsiveDemo = () => {
  return (
    // 主要容器 - 響應式背景和間距
    // py-8: 手機版垂直間距 32px
    // sm:py-12: 平板版垂直間距 48px  
    // md:py-16: 筆電版垂直間距 64px
    // lg:py-20: 桌面版垂直間距 80px
    <section className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 md:py-8">
        
        {/* 標題區域 - 響應式標題和描述 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          {/* 主標題 - 響應式字體大小 */}
          {/* text-2xl: 手機版 24px */}
          {/* sm:text-3xl: 平板版 30px */}
          {/* md:text-4xl: 筆電版 36px */}
          {/* lg:text-5xl: 桌面版 48px */}
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white sm:mb-4 md:mb-6">
            響應式設計展示
          </h2>
          {/* 副標題 - 響應式字體 */}
          <p className="text-base font-normal text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
            體驗在不同設備上的完美適配
          </p>
        </div>

        {/* 設備尺寸展示區域 - 響應式網格 */}
        {/* grid-cols-1: 手機版 1欄 */}
        {/* sm:grid-cols-2: 平板版 2欄 */}
        {/* lg:grid-cols-4: 桌面版 4欄 */}
        {/* gap-4: 手機版間距 16px */}
        {/* sm:gap-6: 平板版間距 24px */}
        {/* md:gap-8: 筆電版間距 32px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
          
          {/* 手機設備卡片 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            {/* 手機圖標容器 */}
            <div className="w-12 h-16 mx-auto mb-4 bg-blue-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            {/* 設備名稱 */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">手機</h3>
            {/* 尺寸範圍 */}
            <p className="text-sm text-gray-500 dark:text-gray-400">&lt; 640px</p>
            {/* 布局特色 */}
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">單欄布局</p>
          </div>

          {/* 平板設備卡片 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            {/* 平板圖標容器 */}
            <div className="w-16 h-12 mx-auto mb-4 bg-green-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">平板</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">640px - 1024px</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">兩欄布局</p>
          </div>

          {/* 筆電設備卡片 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            {/* 筆電圖標容器 */}
            <div className="w-16 h-10 mx-auto mb-4 bg-purple-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">筆電</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">1024px - 1280px</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">三欄布局</p>
          </div>

          {/* 桌機設備卡片 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            {/* 桌機圖標容器 */}
            <div className="w-16 h-12 mx-auto mb-4 bg-orange-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">桌機</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">&gt; 1280px</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">完整布局</p>
          </div>
        </div>

        {/* 響應式按鈕展示區域 */}
        <div className="mb-12">
          {/* 區塊標題 - 響應式字體 */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-2xl">
            響應式按鈕
          </h3>
          {/* 按鈕容器 - 響應式布局 */}
          {/* flex-col: 手機版垂直排列 */}
          {/* sm:flex-row: 平板版水平排列 */}
          {/* sm:flex-wrap: 平板版允許換行 */}
          {/* space-y-4: 手機版垂直間距 16px */}
          {/* sm:space-y-0: 平板版取消垂直間距 */}
          {/* sm:space-x-4: 平板版水平間距 16px */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:justify-center sm:space-y-0 sm:space-x-4 items-center">
            {/* 響應式主按鈕 - 使用 responsive 屬性 */}
            <Button variant="primary" size="lg" responsive={true}>
              響應式主按鈕
            </Button>
            {/* 響應式輪廓按鈕 */}
            <Button variant="outline" size="md" responsive={true}>
              響應式輪廓按鈕
            </Button>
            {/* 響應式成功按鈕 */}
            <Button variant="success" size="sm" responsive={true}>
              響應式成功按鈕
            </Button>
          </div>
        </div>

        {/* 響應式文字大小展示區域 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-2xl">
            響應式文字
          </h3>
          <div className="space-y-4 text-center">
            {/* 文字範例 1 - 漸進式字體大小 */}
            {/* text-xs: 手機版 12px */}
            {/* sm:text-sm: 平板版 14px */}
            {/* md:text-base: 筆電版 16px */}
            {/* lg:text-lg: 桌面版 18px */}
            {/* xl:text-xl: 大桌面版 20px */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400">
              這段文字會根據螢幕尺寸調整大小
            </p>
            {/* 文字範例 2 - 更大的響應式文字 */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-gray-200">
              這是較大的響應式文字
            </p>
          </div>
        </div>

        {/* 響應式間距展示區域 */}
        {/* 漸層背景和響應式內距 */}
        {/* p-4: 手機版內距 16px */}
        {/* sm:p-6: 平板版內距 24px */}
        {/* md:p-8: 筆電版內距 32px */}
        {/* lg:p-12: 桌面版內距 48px */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
          {/* 區塊標題 - 響應式字體和間距 */}
          {/* mb-4: 手機版下邊距 16px */}
          {/* sm:mb-6: 平板版下邊距 24px */}
          {/* md:mb-8: 筆電版下邊距 32px */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 text-center sm:text-2xl">
            響應式間距
          </h3>
          {/* 說明文字 - 響應式字體 */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            這個區塊的內外間距會根據螢幕尺寸自動調整，確保在所有設備上都有最佳的視覺效果。
          </p>
        </div>

        {/* 設備可見性控制展示區域 */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 sm:text-2xl">
            設備可見性控制
          </h3>
          <div className="space-y-2">
            {/* 只在手機顯示的區塊 */}
            {/* block: 預設顯示 */}
            {/* sm:hidden: 平板以上隱藏 */}
            <div className="block sm:hidden bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">📱 只在手機顯示</p>
            </div>
            {/* 只在平板顯示的區塊 */}
            {/* hidden: 預設隱藏 */}
            {/* sm:block: 平板顯示 */}
            {/* md:hidden: 筆電以上隱藏 */}
            <div className="hidden sm:block md:hidden bg-green-100 dark:bg-green-900 p-4 rounded-lg">
              <p className="text-green-800 dark:text-green-200">📟 只在平板顯示</p>
            </div>
            {/* 只在中等螢幕顯示的區塊 */}
            {/* hidden: 預設隱藏 */}
            {/* md:block: 筆電顯示 */}
            {/* lg:hidden: 桌面以上隱藏 */}
            <div className="hidden md:block lg:hidden bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
              <p className="text-purple-800 dark:text-purple-200">💻 只在中等螢幕顯示</p>
            </div>
            {/* 只在大螢幕顯示的區塊 */}
            {/* hidden: 預設隱藏 */}
            {/* lg:block: 桌面以上顯示 */}
            <div className="hidden lg:block bg-orange-100 dark:bg-orange-900 p-4 rounded-lg">
              <p className="text-orange-800 dark:text-orange-200">🖥️ 只在大螢幕顯示</p>
            </div>
          </div>
        </div>

        {/* 操作說明區域 */}
        <div className="mt-12 text-center">
          {/* 說明卡片 - 醒目的背景色 */}
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 sm:p-6 rounded-lg">
            {/* 說明標題 */}
            <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              📐 測試響應式設計
            </h4>
            {/* 操作指南 - 響應式字體 */}
            <p className="text-sm sm:text-base text-yellow-700 dark:text-yellow-300">
              請調整瀏覽器窗口大小或使用開發者工具的設備模擬器，觀察頁面在不同尺寸下的變化
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveDemo;