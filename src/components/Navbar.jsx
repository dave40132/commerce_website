import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import Button from "./Button";

/**
 * 響應式導航列組件
 * 
 * 功能特色：
 * - 完全響應式設計，適配所有設備
 * - 置頂固定導航 (sticky top-0)
 * - 品牌 logo 和名稱自動調整尺寸
 * - 購物車按鈕帶有商品數量提示
 * - 登入按鈕響應式顯示（手機圖標，桌面文字）
 * - 手機版漢堡選單
 * - 手機版額外選項（我的帳戶、訂單查詢）
 * - 深色模式支援
 * 
 * 響應式行為：
 * - 手機版: 折疊選單，圖標按鈕，較小尺寸
 * - 平板版: 水平展開，混合顯示
 * - 桌面版: 完整導航，全文字顯示
 */
function NavbarComponent() {
  return (
    // 導航列主容器 - 固定在頁面頂部，帶有邊框和背景色
    <Navbar fluid rounded className="border-b sticky top-0 z-50 bg-white dark:bg-gray-900">
      
      {/* 品牌區域 - 響應式 logo 和品牌名稱 */}
      <NavbarBrand as={Link} to="/" className="flex items-center">
        {/* 品牌 logo - 響應式尺寸：手機6x6，平板以上8x8 */}
        <svg className="w-6 h-6 mr-2 text-blue-600 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
        </svg>
        {/* 品牌名稱 - 響應式字體大小 */}
        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white sm:text-xl">
          電商平台
        </span>
      </NavbarBrand>
      
      {/* 右側按鈕區域 - lg:order-2 確保在大螢幕上顯示在右側 */}
      <div className="flex items-center lg:order-2 space-x-1 sm:space-x-2">
        
        {/* 購物車按鈕 - 響應式設計帶數量提示 */}
        <Button 
          variant="outline" 
          size="sm" 
          className="relative p-2 sm:p-2.5"
          onClick={() => console.log('開啟購物車')}
        >
          {/* 購物車圖標 - 響應式尺寸 */}
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
          </svg>
          {/* 商品數量提示圓點 - 響應式位置和尺寸 */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center sm:w-5 sm:h-5 sm:-top-2 sm:-right-2">
            0
          </span>
        </Button>
        
        {/* 登入按鈕 - 響應式顯示：手機顯示用戶圖標，平板以上顯示文字 */}
        <Button 
          variant="primary" 
          size="sm"
          className="px-2 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm"
          onClick={() => console.log('登入')}
        >
          {/* 平板以上顯示的文字 */}
          <span className="hidden sm:inline">登入</span>
          {/* 手機版顯示的用戶圖標 */}
          <span className="sm:hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
        </Button>
        
        {/* 手機版選單切換按鈕 */}
        <NavbarToggle className="p-2" />
      </div>
      
      {/* 導航選單 - 桌面版水平顯示，手機版折疊顯示 */}
      <NavbarCollapse className="lg:w-auto">
        
        {/* 主要導航連結 - 每個連結都有完整的響應式樣式 */}
        <NavbarLink 
          as={Link} 
          to="/" 
          active
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          首頁
        </NavbarLink>
        
        <NavbarLink 
          as={Link} 
          to="/products"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          商品
        </NavbarLink>
        
        <NavbarLink 
          as={Link} 
          to="/categories"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          分類
        </NavbarLink>
        
        <NavbarLink 
          as={Link} 
          to="/about"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          關於我們
        </NavbarLink>
        
        <NavbarLink 
          as={Link} 
          to="/contact"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          聯絡我們
        </NavbarLink>
        
        {/* 手機版額外選項 - 只在手機和小平板顯示 */}
        {/* block lg:hidden = 大螢幕隱藏，小螢幕顯示 */}
        <div className="block lg:hidden pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          
          {/* 我的帳戶連結 - 手機版專用 */}
          <NavbarLink 
            as={Link} 
            to="/account"
            className="text-sm py-2 px-3 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            我的帳戶
          </NavbarLink>
          
          {/* 訂單查詢連結 - 手機版專用 */}
          <NavbarLink 
            as={Link} 
            to="/orders"
            className="text-sm py-2 px-3 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            訂單查詢
          </NavbarLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;
