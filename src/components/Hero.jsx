import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          專業電商平台
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          探索最新的產品系列，享受優質的購物體驗。我們提供高品質的商品和專業的客戶服務，讓您的購物之旅更加愉快。
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => console.log('開始購物')}
          >
            立即購物
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => console.log('了解更多')}
          >
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;