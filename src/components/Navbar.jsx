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
    <Navbar fluid rounded className="border-b">
      <NavbarBrand as={Link} to="/" className="flex items-center">
        <svg className="w-8 h-8 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
        </svg>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          電商平台
        </span>
      </NavbarBrand>
      
      <div className="flex items-center lg:order-2 space-x-2">
        {/* 購物車按鈕 */}
        <Button 
          variant="outline" 
          size="sm" 
          className="relative"
          onClick={() => console.log('開啟購物車')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Button>
        
        {/* 登入按鈕 */}
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => console.log('登入')}
        >
          登入
        </Button>
        
        <NavbarToggle />
      </div>
      
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          首頁
        </NavbarLink>
        <NavbarLink as={Link} to="/products">
          商品
        </NavbarLink>
        <NavbarLink as={Link} to="/categories">
          分類
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          關於我們
        </NavbarLink>
        <NavbarLink as={Link} to="/contact">
          聯絡我們
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;
