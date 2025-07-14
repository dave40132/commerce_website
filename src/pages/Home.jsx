import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import ResponsiveDemo from '../components/ResponsiveDemo';

/**
 * 首頁組件
 * 
 * 功能特色：
 * - 組合多個主要組件構成完整的首頁
 * - 依序展示 Hero 區域、特色商品、響應式演示
 * - 提供完整的電商首頁體驗
 * - 所有組件都具備響應式設計
 * 
 * 頁面結構：
 * 1. Hero - 主要視覺區域，包含標題、描述、CTA 按鈕
 * 2. FeaturedProducts - 特色商品展示區域
 * 3. ResponsiveDemo - RWD 功能展示和教學區域
 * 
 * 使用場景：
 * - 網站首頁展示
 * - 響應式設計示範
 * - 電商功能演示
 */
const Home = () => {
  return (
    <div>
      {/* 主要展示區域 - Hero Section */}
      {/* 包含品牌標語、主要 CTA 按鈕和統計資訊 */}
      <Hero />
      
      {/* 特色商品展示區域 */}
      {/* 展示精選商品卡片，包含價格、評分、購買按鈕 */}
      <FeaturedProducts />
      
      {/* 響應式設計演示區域 */}
      {/* 教學性質的區域，展示 RWD 實現方式和測試方法 */}
      <ResponsiveDemo />
    </div>
  );
};

export default Home;