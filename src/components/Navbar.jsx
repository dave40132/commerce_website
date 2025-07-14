import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import Button from "./Button";

function NavbarComponent() {
  return (
    <Navbar fluid rounded className="border-b sticky top-0 z-50 bg-white dark:bg-gray-900">
      {/* 品牌區域 - 改善響應式 */}
      <NavbarBrand as={Link} to="/" className="flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
        </svg>
        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white sm:text-xl">
          電商平台
        </span>
      </NavbarBrand>
      
      {/* 右側按鈕區域 - 改善響應式布局 */}
      <div className="flex items-center lg:order-2 space-x-1 sm:space-x-2">
        {/* 購物車按鈕 - 改善響應式 */}
        <Button 
          variant="outline" 
          size="sm" 
          className="relative p-2 sm:p-2.5"
          onClick={() => console.log('開啟購物車')}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center sm:w-5 sm:h-5 sm:-top-2 sm:-right-2">
            0
          </span>
        </Button>
        
        {/* 登入按鈕 - 手機版縮小，平板以上顯示完整文字 */}
        <Button 
          variant="primary" 
          size="sm"
          className="px-2 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm"
          onClick={() => console.log('登入')}
        >
          <span className="hidden sm:inline">登入</span>
          <span className="sm:hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
        </Button>
        
        <NavbarToggle className="p-2" />
      </div>
      
      {/* 導航選單 - 改善響應式 */}
      <NavbarCollapse className="lg:w-auto">
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
        
        {/* 手機版額外選項 */}
        <div className="block lg:hidden pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <NavbarLink 
            as={Link} 
            to="/account"
            className="text-sm py-2 px-3 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            我的帳戶
          </NavbarLink>
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
