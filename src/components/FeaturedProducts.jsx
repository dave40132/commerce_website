import React from 'react';
import Button from './Button';

/**
 * 特色商品展示組件
 * 
 * 功能特色：
 * - 響應式商品網格佈局（手機1欄→平板2欄→桌面3欄）
 * - 商品卡片包含圖片、標題、評分、價格、按鈕
 * - 支援商品標籤（熱銷、新品、限時優惠等）
 * - 星級評分系統顯示
 * - 價格對比（原價與折扣價）
 * - 響應式按鈕布局
 * - hover 效果和動畫
 * - 觸控優化設計
 * 
 * 響應式斷點：
 * - 手機: < 640px - 單欄布局
 * - 平板: 640px - 1024px - 雙欄布局
 * - 桌面: > 1024px - 三欄布局
 */
const FeaturedProducts = () => {
  // 商品資料陣列 - 實際應用中會從 API 或 props 獲取
  const products = [
    {
      id: 1,
      name: '時尚手機',
      price: 'NT$ 12,999',          // 現價
      originalPrice: 'NT$ 15,999',  // 原價
      image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Phone',
      badge: '熱銷',                // 商品標籤
      rating: 4.8                   // 評分（滿分5分）
    },
    {
      id: 2,
      name: '無線耳機',
      price: 'NT$ 2,999',
      originalPrice: 'NT$ 3,999',
      image: 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=Earbuds',
      badge: '新品',
      rating: 4.6
    },
    {
      id: 3,
      name: '智能手錶',
      price: 'NT$ 8,999',
      originalPrice: 'NT$ 10,999',
      image: 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Watch',
      badge: '限時優惠',
      rating: 4.9
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* 主容器 - 響應式內外間距 */}
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 md:py-8">
        
        {/* 標題區域 - 響應式標題和描述 */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* 主標題 - 響應式字體大小和間距 */}
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white sm:mb-4 md:mb-6">
            特色商品
          </h2>
          {/* 描述文字 - 響應式字體大小 */}
          <p className="text-base font-normal text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
            精選優質商品，為您帶來最佳購物體驗
          </p>
        </div>
        
        {/* 商品網格 - 響應式佈局：手機1欄，平板2欄，桌面3欄 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* 遍歷商品陣列，為每個商品生成卡片 */}
          {products.map((product) => (
            <div key={product.id} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              
              {/* 商品圖片區域 */}
              <div className="relative">
                {/* 商品圖片 - 響應式高度適配不同螢幕 */}
                <img 
                  className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64 object-cover" 
                  src={product.image} 
                  alt={product.name} 
                />
                {/* 商品標籤 - 絕對定位於圖片左上角 */}
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded sm:text-sm">
                  {product.badge}
                </span>
              </div>
              
              {/* 商品資訊區域 - 響應式內間距 */}
              <div className="p-4 sm:p-5 md:p-6">
                
                {/* 商品標題 - 響應式字體大小 */}
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                  {product.name}
                </h5>
                
                {/* 評分區域 - 星級評分系統 */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {/* 生成5顆星，根據評分決定是否填滿 */}
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-300'} mr-1`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    ))}
                    {/* 評分數字顯示 */}
                    <span className="ml-1 text-xs sm:text-sm text-gray-500">({product.rating})</span>
                  </div>
                </div>

                {/* 價格區域 - 響應式布局和字體 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    {/* 現價 - 突出顯示 */}
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    {/* 原價 - 劃線顯示 */}
                    <span className="text-sm text-gray-500 line-through sm:ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* 按鈕區域 - 響應式布局：手機垂直，桌面水平 */}
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  {/* 加入購物車按鈕 - 主要按鈕 */}
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                    onClick={() => console.log(`加入購物車: ${product.name}`)}
                  >
                    加入購物車
                  </Button>
                  {/* 查看詳情按鈕 - 次要按鈕 */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 sm:flex-none text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                    onClick={() => console.log(`查看詳情: ${product.name}`)}
                  >
                    詳情
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 查看更多按鈕 - 置中顯示，響應式間距 */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <Button 
            variant="secondary" 
            size="lg"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            onClick={() => console.log('查看所有商品')}
          >
            查看所有商品
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;