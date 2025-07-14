import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-12 md:py-16 lg:py-20 xl:py-24">
        {/* 主標題 - 增強響應式字體大小 */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white sm:mb-6 md:mb-8">
          專業電商平台
        </h1>
        
        {/* 副標題 - 改善響應式間距和字體 */}
        <p className="mb-6 text-base font-normal text-gray-500 sm:text-lg md:text-xl lg:text-xl sm:px-8 md:px-16 lg:px-32 xl:px-48 dark:text-gray-400 sm:mb-8 md:mb-10">
          探索最新的產品系列，享受優質的購物體驗。我們提供高品質的商品和專業的客戶服務，讓您的購物之旅更加愉快。
        </p>
        
        {/* 按鈕區域 - 改善響應式布局 */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6">
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            onClick={() => console.log('開始購物')}
          >
            立即購物
            <svg className="w-3 h-3 ml-2 sm:w-3.5 sm:h-3.5 sm:ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            onClick={() => console.log('了解更多')}
          >
            了解更多
          </Button>
        </div>
        
        {/* 新增：統計資訊區域 - 手機隱藏，桌面顯示 */}
        <div className="hidden md:flex justify-center mt-12 lg:mt-16 xl:mt-20 space-x-8 lg:space-x-12">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
            <div className="text-sm lg:text-base text-gray-500 dark:text-gray-400">商品種類</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">50K+</div>
            <div className="text-sm lg:text-base text-gray-500 dark:text-gray-400">滿意顧客</div>
          </div>
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