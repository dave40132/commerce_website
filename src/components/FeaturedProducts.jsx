import React from 'react';
import Button from './Button';

/**
 * 特色商品展示組件
 * 
 * 功能說明：
 * - 展示電商網站的熱門/特色商品
 * - 支援商品卡片的響應式網格布局
 * - 包含商品圖片、名稱、價格、評分、標籤等完整資訊
 * - 提供加入購物車和查看詳情的操作按鈕
 * 
 * 響應式特色：
 * - 網格布局：手機 1欄 → 平板 2欄 → 桌面 3欄
 * - 商品圖片：自動調整高度適配不同螢幕
 * - 按鈕布局：手機垂直排列 → 桌面水平排列
 * - 間距系統：智能調整內外間距
 * 
 * 可自訂修改的地方：
 * - products 陣列：修改商品資料
 * - 商品卡片樣式：調整 className
 * - 網格斷點：修改 grid-cols-* 類別
 * - 按鈕操作：修改 onClick 處理函數
 */
const FeaturedProducts = () => {
  // 商品資料陣列 - 可以從API或資料庫取得
  // 您可以修改這裡的資料來自訂商品內容
  const products = [
    {
      id: 1,
      name: '時尚手機',
      price: 'NT$ 12,999',
      originalPrice: 'NT$ 15,999',
      image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Phone',
      badge: '熱銷',
      rating: 4.8
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
    // 主要容器 - 響應式背景和間距
    // py-8: 手機版垂直間距 32px
    // sm:py-12: 平板版垂直間距 48px
    // md:py-16: 筆電版垂直間距 64px
    // lg:py-20: 桌面版垂直間距 80px
    <section className="bg-gray-50 dark:bg-gray-800 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 md:py-8">
        
        {/* 標題區域 - 響應式文字和間距 */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* 主標題 - 響應式字體大小 */}
          {/* text-2xl: 手機版 24px */}
          {/* sm:text-3xl: 平板版 30px */}
          {/* md:text-4xl: 筆電版 36px */}
          {/* lg:text-5xl: 桌面版 48px */}
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white sm:mb-4 md:mb-6">
            特色商品
          </h2>
          {/* 副標題 - 響應式字體大小 */}
          <p className="text-base font-normal text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
            精選優質商品，為您帶來最佳購物體驗
          </p>
        </div>
        
        {/* 商品網格容器 - 響應式網格布局 */}
        {/* grid-cols-1: 手機版 1欄 */}
        {/* sm:grid-cols-2: 平板版 2欄 */}
        {/* lg:grid-cols-3: 桌面版 3欄 */}
        {/* gap-4: 手機版間距 16px */}
        {/* sm:gap-6: 平板版間距 24px */}
        {/* md:gap-8: 筆電版間距 32px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            // 商品卡片 - 響應式陰影和懸停效果
            // w-full: 確保在網格中填滿可用寬度
            // hover:-translate-y-1: 懸停時向上移動 4px
            <div key={product.id} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              
              {/* 商品圖片區域 */}
              <div className="relative">
                {/* 商品圖片 - 響應式高度 */}
                {/* h-48: 手機版高度 192px */}
                {/* sm:h-56: 平板版高度 224px */}
                {/* md:h-64: 筆電版高度 256px */}
                {/* lg:h-56: 桌面版高度 224px (3欄布局需要稍微小一點) */}
                {/* xl:h-64: 大桌面版高度 256px */}
                <img 
                  className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64 object-cover" 
                  src={product.image} 
                  alt={product.name} 
                />
                {/* 商品標籤 - 絕對定位在左上角 */}
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded sm:text-sm">
                  {product.badge}
                </span>
              </div>
              
              {/* 商品資訊區域 - 響應式內距 */}
              {/* p-4: 手機版內距 16px */}
              {/* sm:p-5: 平板版內距 20px */}
              {/* md:p-6: 筆電版內距 24px */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* 商品名稱 - 響應式字體 */}
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                  {product.name}
                </h5>
                
                {/* 評分區域 - 響應式星星尺寸 */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {/* 動態產生星星評分 */}
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
                    {/* 評分數字 - 響應式字體 */}
                    <span className="ml-1 text-xs sm:text-sm text-gray-500">({product.rating})</span>
                  </div>
                </div>

                {/* 價格區域 - 響應式布局 */}
                {/* flex-col: 手機版垂直排列 */}
                {/* sm:flex-row: 平板版水平排列 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    {/* 現價 - 響應式字體 */}
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    {/* 原價 - 響應式間距 */}
                    <span className="text-sm text-gray-500 line-through sm:ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* 操作按鈕區域 - 響應式布局 */}
                {/* flex-col: 手機版垂直排列 */}
                {/* sm:flex-row: 平板版水平排列 */}
                {/* space-y-2: 手機版垂直間距 8px */}
                {/* sm:space-y-0: 平板版取消垂直間距 */}
                {/* sm:space-x-2: 平板版水平間距 8px */}
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  {/* 加入購物車按鈕 - 響應式尺寸 */}
                  {/* flex-1: 佔據可用空間 */}
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                    onClick={() => console.log(`加入購物車: ${product.name}`)}
                  >
                    加入購物車
                  </Button>
                  {/* 查看詳情按鈕 - 響應式尺寸 */}
                  {/* flex-1: 手機版同樣寬度 */}
                  {/* sm:flex-none: 平板版自動寬度 */}
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

        {/* 查看更多按鈕區域 - 響應式間距 */}
        {/* mt-8: 手機版上間距 32px */}
        {/* sm:mt-10: 平板版上間距 40px */}
        {/* md:mt-12: 筆電版上間距 48px */}
        {/* lg:mt-16: 桌面版上間距 64px */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {/* 查看所有商品按鈕 - 響應式尺寸 */}
          {/* w-full: 手機版全寬 */}
          {/* sm:w-auto: 平板版以上自動寬度 */}
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