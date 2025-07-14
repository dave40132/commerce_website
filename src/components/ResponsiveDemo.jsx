import React from 'react';
import Button from './Button';

const ResponsiveDemo = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 md:py-8">
        {/* 標題 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white sm:mb-4 md:mb-6">
            響應式設計展示
          </h2>
          <p className="text-base font-normal text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
            體驗在不同設備上的完美適配
          </p>
        </div>

        {/* 響應式網格展示 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
          {/* 手機 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            <div className="w-12 h-16 mx-auto mb-4 bg-blue-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">手機</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">&lt; 640px</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">單欄布局</p>
          </div>

          {/* 平板 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            <div className="w-16 h-12 mx-auto mb-4 bg-green-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">平板</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">640px - 1024px</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">兩欄布局</p>
          </div>

          {/* 筆電 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
            <div className="w-16 h-10 mx-auto mb-4 bg-purple-600 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">筆電</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">1024px - 1280px</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">三欄布局</p>
          </div>

          {/* 桌機 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
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

        {/* 響應式按鈕展示 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-2xl">
            響應式按鈕
          </h3>
          <div className="flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:justify-center sm:space-y-0 sm:space-x-4 items-center">
            <Button variant="primary" size="lg" responsive={true}>
              響應式主按鈕
            </Button>
            <Button variant="outline" size="md" responsive={true}>
              響應式輪廓按鈕
            </Button>
            <Button variant="success" size="sm" responsive={true}>
              響應式成功按鈕
            </Button>
          </div>
        </div>

        {/* 響應式文字大小展示 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-2xl">
            響應式文字
          </h3>
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400">
              這段文字會根據螢幕尺寸調整大小
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-gray-200">
              這是較大的響應式文字
            </p>
          </div>
        </div>

        {/* 響應式間距展示 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 text-center sm:text-2xl">
            響應式間距
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            這個區塊的內外間距會根據螢幕尺寸自動調整，確保在所有設備上都有最佳的視覺效果。
          </p>
        </div>

        {/* 設備可見性展示 */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 sm:text-2xl">
            設備可見性控制
          </h3>
          <div className="space-y-2">
            <div className="block sm:hidden bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">📱 只在手機顯示</p>
            </div>
            <div className="hidden sm:block md:hidden bg-green-100 dark:bg-green-900 p-4 rounded-lg">
              <p className="text-green-800 dark:text-green-200">📟 只在平板顯示</p>
            </div>
            <div className="hidden md:block lg:hidden bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
              <p className="text-purple-800 dark:text-purple-200">💻 只在中等螢幕顯示</p>
            </div>
            <div className="hidden lg:block bg-orange-100 dark:bg-orange-900 p-4 rounded-lg">
              <p className="text-orange-800 dark:text-orange-200">🖥️ 只在大螢幕顯示</p>
            </div>
          </div>
        </div>

        {/* 操作說明 */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 sm:p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              📐 測試響應式設計
            </h4>
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