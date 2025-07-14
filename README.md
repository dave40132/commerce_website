# 電商網站 - React.js 專案

這是一個使用 React.js、Tailwind CSS 和 Flowbite React 組件庫開發的現代化電商網站。

## ✨ 功能特色

- 🎯 **現代化設計**: 使用 Tailwind CSS 和 Flowbite React 組件
- 📱 **響應式設計**: 支援桌面、平板和手機設備
- 🧩 **模組化組件**: 可重用的按鈕、導航列、商品卡片等組件
- 🛍️ **電商功能**: 產品展示、購物車、用戶介面
- 🌙 **深色模式支援**: 支援明暗主題切換
- ⚡ **快速開發**: 使用 Vite 進行快速構建和熱重載

## 🏗️ 項目結構

```
src/
├── components/          # 可重用組件
│   ├── Button.jsx      # 自定義按鈕組件
│   ├── Navbar.jsx      # 導航列組件
│   ├── Hero.jsx        # 主要 highlight 組件
│   ├── FeaturedProducts.jsx  # 特色商品展示
│   └── Footer.jsx      # 頁腳組件
├── pages/              # 頁面組件
│   └── Home.jsx        # 首頁
├── App.jsx             # 主應用組件
└── main.jsx            # 應用入口點
```

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
npm run dev
```

服務器將在 `http://localhost:5173` 啟動

### 構建生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 🎨 主要組件

### Button 組件

可重用的按鈕組件，支援多種樣式：

```jsx
import Button from './components/Button';

// 主要按鈕
<Button variant="primary" size="lg">
  立即購物
</Button>

// 次要按鈕
<Button variant="secondary" size="md">
  了解更多
</Button>

// 輪廓按鈕
<Button variant="outline" size="sm">
  查看詳情
</Button>
```

**支援的 variants:**
- `primary` - 主要按鈕（藍色）
- `secondary` - 次要按鈕（灰色）
- `success` - 成功按鈕（綠色）
- `danger` - 危險按鈕（紅色）
- `outline` - 輪廓按鈕

**支援的 sizes:**
- `xs` - 超小尺寸
- `sm` - 小尺寸
- `md` - 中等尺寸（預設）
- `lg` - 大尺寸
- `xl` - 超大尺寸

### Navbar 組件

響應式導航列，包含：
- 品牌 logo 和名稱
- 主要導航連結
- 購物車按鈕（帶商品數量提示）
- 登入按鈕
- 手機版選單切換

### Hero 組件

主要的 highlight 區域，包含：
- 醒目的標題和描述
- 呼叫行動按鈕
- 響應式布局

### FeaturedProducts 組件

特色商品展示區域，包含：
- 商品網格布局
- 商品圖片、名稱、價格
- 評分星級顯示
- 特價標籤
- 加入購物車和查看詳情按鈕

## 🛠️ 技術棧

- **React.js 19** - 前端框架
- **React Router Dom** - 路由管理
- **Tailwind CSS 4** - CSS 框架
- **Flowbite React** - UI 組件庫
- **Vite** - 構建工具
- **ESLint** - 代碼規範檢查

## 📄 授權

此專案為示例項目，僅供學習和參考使用。
