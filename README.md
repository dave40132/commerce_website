# 電商網站 - React.js 專案

這是一個使用 React.js、Tailwind CSS 和 Flowbite React 組件庫開發的現代化電商網站，具有完整的響應式網頁設計 (RWD) 功能。

## ✨ 功能特色

- 🎯 **現代化設計**: 使用 Tailwind CSS 和 Flowbite React 組件
- 📱 **完整 RWD 支援**: 完美適配所有設備尺寸
- 🧩 **模組化組件**: 可重用的按鈕、導航列、商品卡片等組件
- 🛍️ **電商功能**: 產品展示、購物車、用戶介面
- 🌙 **深色模式支援**: 支援明暗主題切換
- ⚡ **快速開發**: 使用 Vite 進行快速構建和熱重載
- 🔧 **觸控優化**: 支援觸控設備的最佳體驗

## 📱 響應式設計 (RWD) 特色

### 📐 設備斷點支援
- **手機**: < 640px (單欄布局)
- **平板**: 640px - 1024px (雙欄布局)
- **筆電**: 1024px - 1280px (三欄布局)
- **桌機**: > 1280px (完整布局)

### � 響應式元素
- **文字大小**: 根據螢幕尺寸自動調整
- **間距系統**: 智能間距，確保各設備視覺平衡
- **按鈕尺寸**: 觸控友善的按鈕大小
- **圖片適配**: 自動調整圖片尺寸和比例
- **網格系統**: 彈性網格布局
- **導航選單**: 手機版折疊選單

### 👆 觸控優化
- **按鈕大小**: 符合觸控標準的最小 44px 觸控目標
- **按壓效果**: 視覺回饋動畫
- **手勢友善**: 優化的觸控體驗

## �🏗️ 項目結構

```
src/
├── components/          # 可重用組件
│   ├── Button.jsx      # 響應式按鈕組件
│   ├── Navbar.jsx      # 響應式導航列
│   ├── Hero.jsx        # 響應式主要 highlight 區域
│   ├── FeaturedProducts.jsx  # 響應式商品展示
│   ├── Footer.jsx      # 響應式頁腳
│   └── ResponsiveDemo.jsx    # RWD 功能展示
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

增強的響應式按鈕組件，支援多種樣式和響應式功能：

```jsx
import Button from './components/Button';

// 基本按鈕
<Button variant="primary" size="lg">
  立即購物
</Button>

// 響應式按鈕
<Button variant="primary" size="lg" responsive={true}>
  響應式按鈕
</Button>

// 全寬按鈕
<Button variant="outline" fullWidth={true}>
  全寬按鈕
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

**新增功能:**
- `responsive` - 響應式尺寸自動調整
- `fullWidth` - 全寬度按鈕
- 觸控優化和按壓效果

### Navbar 組件

完全響應式的導航列，包含：
- 品牌 logo 和名稱（自動調整尺寸）
- 主要導航連結（平板以上顯示）
- 購物車按鈕（響應式圖標大小）
- 登入按鈕（手機版顯示圖標，桌面版顯示文字）
- 手機版漢堡選單
- 置頂固定設計

### Hero 組件

主要的 highlight 區域，包含：
- 響應式標題（手機 3xl → 桌面 7xl）
- 自適應描述文字
- 響應式按鈕布局
- 桌面版統計資訊（手機隱藏）
- 智能間距系統

### FeaturedProducts 組件

響應式商品展示區域，包含：
- 彈性網格布局（手機 1欄 → 平板 2欄 → 桌面 3欄）
- 響應式商品卡片
- 自動調整圖片尺寸
- 響應式按鈕布局
- 觸控友善的互動元素

### Footer 組件

響應式頁腳設計：
- 自適應欄位布局
- 響應式文字大小
- 智能間距調整
- 社交媒體圖標尺寸調整

### ResponsiveDemo 組件

RWD 功能展示區域：
- 設備尺寸說明
- 響應式元素示範
- 互動式測試區域
- 可見性控制展示

## 📱 測試響應式設計

1. **瀏覽器調整**: 直接拖拽調整瀏覽器窗口大小
2. **開發者工具**: 
   - 按 F12 開啟開發者工具
   - 點擊設備模擬器圖標
   - 選擇不同的設備尺寸測試
3. **實際設備**: 在手機、平板、筆電上實際測試

## 🛠️ 技術棧

- **React.js 19** - 前端框架
- **React Router Dom** - 路由管理
- **Tailwind CSS 4** - 響應式 CSS 框架
- **Flowbite React** - UI 組件庫
- **Vite** - 構建工具
- **ESLint** - 代碼規範檢查

## 🎯 響應式設計最佳實踐

### Tailwind CSS 響應式前綴
- `sm:` - >= 640px
- `md:` - >= 768px  
- `lg:` - >= 1024px
- `xl:` - >= 1280px
- `2xl:` - >= 1536px

### 設計原則
1. **Mobile First**: 從手機版開始設計，向上擴展
2. **Progressive Enhancement**: 漸進式增強體驗
3. **Touch Friendly**: 觸控友善的按鈕和互動元素
4. **Performance**: 圖片優化和lazy loading
5. **Accessibility**: 無障礙設計考量

## 📄 授權

此專案為示例項目，僅供學習和參考使用。
