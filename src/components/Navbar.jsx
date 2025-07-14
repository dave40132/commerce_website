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
 * 功能說明：
 * - 網站主要導航功能，支援所有頁面連結
 * - 包含品牌標識、主選單、購物車和用戶操作
 * - 完全響應式設計，手機版提供漢堡選單
 * - 置頂固定設計，確保導航始終可見
 * 
 * 響應式特色：
 * - 品牌區域：logo和文字尺寸自動調整
 * - 登入按鈕：手機版顯示圖標，桌面版顯示文字
 * - 購物車：響應式圖標大小和提示圓點
 * - 選單：手機版折疊，桌面版水平展開
 * - 手機版額外選項：只在手機版選單中顯示
 * 
 * 可自訂修改的地方：
 * - 導航連結：修改 NavbarLink 的 to 屬性和文字
 * - 品牌名稱：修改 "電商平台" 文字
 * - 購物車數量：修改購物車圓點中的數字
 * - 按鈕操作：修改 onClick 處理函數
 */
function NavbarComponent() {
  return (
    // 主導航容器 - 固定置頂和響應式背景
    // sticky top-0: 固定在頂部
    // z-50: 確保在其他元素之上
    // bg-white dark:bg-gray-900: 支援明暗主題
    <Navbar fluid rounded className="border-b sticky top-0 z-50 bg-white dark:bg-gray-900">
      
      {/* 品牌區域 - 響應式 logo 和品牌名稱 */}
      <NavbarBrand as={Link} to="/" className="flex items-center">
        {/* 品牌 Logo - 響應式尺寸 */}
        {/* w-6 h-6: 手機版 24x24px */}
        {/* sm:w-8 sm:h-8: 平板版以上 32x32px */}
        <svg className="w-6 h-6 mr-2 text-blue-600 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
        </svg>
        {/* 品牌名稱 - 響應式字體大小 */}
        {/* text-lg: 手機版 18px */}
        {/* sm:text-xl: 平板版以上 20px */}
        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white sm:text-xl">
          電商平台
        </span>
      </NavbarBrand>
      
      {/* 右側操作區域 - 響應式按鈕群組 */}
      {/* lg:order-2: 在大螢幕上調整順序，確保在選單折疊按鈕右側 */}
      {/* space-x-1: 手機版按鈕間距 4px */}
      {/* sm:space-x-2: 平板版以上按鈕間距 8px */}
      <div className="flex items-center lg:order-2 space-x-1 sm:space-x-2">
        
        {/* 購物車按鈕 - 響應式尺寸和相對定位 */}
        <Button 
          variant="outline" 
          size="sm" 
          className="relative p-2 sm:p-2.5"  // 響應式內距
          onClick={() => console.log('開啟購物車')}
        >
          {/* 購物車圖標 - 響應式尺寸 */}
          {/* w-4 h-4: 手機版 16x16px */}
          {/* sm:w-5 sm:h-5: 平板版以上 20x20px */}
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
          </svg>
          {/* 商品數量提示圓點 - 響應式尺寸和定位 */}
          {/* w-4 h-4: 手機版 16x16px */}
          {/* sm:w-5 sm:h-5: 平板版以上 20x20px */}
          {/* -top-1 -right-1: 手機版定位 */}
          {/* sm:-top-2 sm:-right-2: 平板版以上定位 */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center sm:w-5 sm:h-5 sm:-top-2 sm:-right-2">
            0 {/* 這裡可以連接到購物車狀態 */}
          </span>
        </Button>
        
        {/* 登入按鈕 - 響應式內容顯示 */}
        <Button 
          variant="primary" 
          size="sm"
          className="px-2 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm"  // 響應式尺寸
          onClick={() => console.log('登入')}
        >
          {/* 桌面版顯示文字 - 只在 sm 以上顯示 */}
          <span className="hidden sm:inline">登入</span>
          {/* 手機版顯示圖標 - 只在 sm 以下顯示 */}
          <span className="sm:hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
        </Button>
        
        {/* 漢堡選單按鈕 - 手機版顯示 */}
        <NavbarToggle className="p-2" />
      </div>
      
      {/* 主選單區域 - 響應式折疊選單 */}
      {/* lg:w-auto: 桌面版自動寬度 */}
      <NavbarCollapse className="lg:w-auto">
        
        {/* 首頁連結 - 設為當前頁面 */}
        <NavbarLink 
          as={Link} 
          to="/" 
          active  // 標記為當前頁面
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          首頁
        </NavbarLink>
        
        {/* 商品頁面連結 */}
        <NavbarLink 
          as={Link} 
          to="/products"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          商品
        </NavbarLink>
        
        {/* 商品分類頁面連結 */}
        <NavbarLink 
          as={Link} 
          to="/categories"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          分類
        </NavbarLink>
        
        {/* 關於我們頁面連結 */}
        <NavbarLink 
          as={Link} 
          to="/about"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          關於我們
        </NavbarLink>
        
        {/* 聯絡我們頁面連結 */}
        <NavbarLink 
          as={Link} 
          to="/contact"
          className="text-sm sm:text-base py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          聯絡我們
        </NavbarLink>
        
        {/* 手機版專用選單區域 - 只在手機版顯示 */}
        {/* block lg:hidden: 只在大螢幕以下顯示 */}
        {/* pt-4 mt-4: 上方間距和邊距 */}
        {/* border-t: 上邊框分隔線 */}
        <div className="block lg:hidden pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          
          {/* 我的帳戶連結 - 只在手機版選單顯示 */}
          <NavbarLink 
            as={Link} 
            to="/account"
            className="text-sm py-2 px-3 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            我的帳戶
          </NavbarLink>
          
          {/* 訂單查詢連結 - 只在手機版選單顯示 */}
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
