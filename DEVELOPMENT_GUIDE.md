# 🚀 響應式電商網站 - 開發指南

這份指南將幫助您理解和修改這個 React.js 響應式電商網站。所有組件都已添加詳細註解，方便您進行客製化修改。

## � 項目結構說明

```
src/
├── components/                    # 可重用組件
│   ├── Button.jsx                # 響應式按鈕組件 ⭐
│   ├── Navbar.jsx                # 導航列組件
│   ├── Hero.jsx                  # 主要展示區域
│   ├── FeaturedProducts.jsx      # 商品展示區域
│   ├── Footer.jsx                # 頁腳組件
│   └── ResponsiveDemo.jsx        # RWD 功能展示
├── pages/                        # 頁面組件
│   └── Home.jsx                  # 首頁
├── App.jsx                       # 主應用組件
└── main.jsx                     # 應用入口點
```

## 🎯 主要組件說明

### 1. Button 組件 (`src/components/Button.jsx`)

**功能**：可重用的響應式按鈕組件

**主要特色**：
- 5種樣式變體：`primary`, `secondary`, `success`, `danger`, `outline`
- 5種尺寸：`xs`, `sm`, `md`, `lg`, `xl`
- 響應式尺寸：啟用 `responsive={true}` 自動調整
- 全寬選項：`fullWidth={true}`
- 觸控優化和動畫效果

**常用修改**：
```jsx
// 基本按鈕
<Button variant="primary" size="lg">
  您的按鈕文字
</Button>

// 響應式按鈕（推薦）
<Button variant="primary" size="lg" responsive={true}>
  響應式按鈕
</Button>

// 全寬按鈕
<Button variant="outline" fullWidth={true}>
  全寬按鈕
</Button>
```

### 2. Hero 組件 (`src/components/Hero.jsx`)

**功能**：網站主要視覺焦點區域

**可修改內容**：
- **主標題**：修改第 37 行的 "專業電商平台"
- **描述文字**：修改第 47 行的描述內容
- **統計數據**：修改第 73-89 行的統計項目
- **按鈕操作**：修改第 61、71 行的 onClick 函數

**響應式特色**：
- 標題：手機 3xl (30px) → 桌面 7xl (72px)
- 間距：手機 py-8 → 桌面 py-24
- 按鈕：手機垂直 → 桌面水平排列

### 3. FeaturedProducts 組件 (`src/components/FeaturedProducts.jsx`)

**功能**：商品展示區域

**可修改內容**：
- **商品資料**：修改第 26-50 行的 `products` 陣列
- **網格布局**：修改第 85 行的 `grid-cols-*` 類別
- **商品卡片樣式**：修改第 88 行的 className
- **按鈕操作**：修改第 157、165 行的 onClick 函數

**商品資料格式**：
```jsx
{
  id: 1,                          // 唯一ID
  name: '商品名稱',                // 商品名稱
  price: 'NT$ 12,999',           // 現價
  originalPrice: 'NT$ 15,999',   // 原價
  image: '圖片URL',               // 商品圖片
  badge: '標籤文字',              // 商品標籤（熱銷、新品等）
  rating: 4.8                    // 評分（1-5）
}
```

### 4. Navbar 組件 (`src/components/Navbar.jsx`)

**功能**：網站主導航

**可修改內容**：
- **品牌名稱**：修改第 47 行的 "電商平台"
- **導航連結**：修改第 95-139 行的 NavbarLink
- **購物車數量**：修改第 77 行的數字 "0"
- **額外選單**：修改第 147-165 行的手機版選項

**新增導航連結範例**：
```jsx
<NavbarLink 
  as={Link} 
  to="/your-page"
  className="text-sm sm:text-base py-2 px-3 ..."
>
  您的頁面
</NavbarLink>
```

### 5. Footer 組件 (`src/components/Footer.jsx`)

**功能**：網站頁腳資訊

**可修改內容**：
- **公司描述**：修改第 64 行的描述文字
- **連結分類**：修改第 79-154 行的連結群組
- **社交媒體**：修改第 172-202 行的社交媒體連結
- **版權資訊**：修改第 162 行的版權文字

## 🎨 響應式設計系統

### 斷點系統

| 前綴 | 最小寬度 | 設備類型 | 典型使用 |
|------|---------|---------|---------|
| (無) | 0px | 手機 | 預設樣式 |
| `sm:` | 640px | 大手機/小平板 | 平板樣式 |
| `md:` | 768px | 平板 | 中等螢幕 |
| `lg:` | 1024px | 筆電 | 大螢幕 |
| `xl:` | 1280px | 桌機 | 超大螢幕 |
| `2xl:` | 1536px | 大桌機 | 極大螢幕 |

### 常用響應式模式

**字體大小**：
```jsx
className="text-sm sm:text-base md:text-lg lg:text-xl"
```

**間距**：
```jsx
className="p-4 sm:p-6 md:p-8 lg:p-12"
```

**布局**：
```jsx
className="flex-col sm:flex-row"           // 手機垂直，平板水平
className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"  // 響應式網格
```

**可見性**：
```jsx
className="block sm:hidden"               // 只在手機顯示
className="hidden sm:block"               // 平板以上顯示
```

## 🔧 常見修改任務

### 1. 修改品牌資訊

**位置**：
- Navbar: `src/components/Navbar.jsx` 第 47 行
- Footer: `src/components/Footer.jsx` 第 55 行
- Hero: `src/components/Hero.jsx` 第 37 行

**修改範例**：
```jsx
// 將 "電商平台" 改為您的品牌名稱
<span className="self-center text-xl font-semibold...">
  您的品牌名稱
</span>
```

### 2. 新增商品

**位置**：`src/components/FeaturedProducts.jsx` 第 26-50 行

**步驟**：
1. 在 `products` 陣列中新增商品物件
2. 確保 `id` 唯一
3. 提供完整的商品資訊

### 3. 修改網格布局

**商品網格**：
```jsx
// 修改 FeaturedProducts.jsx 第 85 行
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"  // 桌面 4 欄
className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5"  // 超大螢幕 5 欄
```

### 4. 新增頁面

**步驟**：
1. 在 `src/pages/` 創建新頁面組件
2. 在 `src/App.jsx` 添加路由
3. 在 Navbar 添加導航連結

**範例**：
```jsx
// 1. 創建 src/pages/Products.jsx
const Products = () => (
  <div className="min-h-screen p-8">
    <h1>商品頁面</h1>
  </div>
);

// 2. 在 App.jsx 添加路由
<Route path="/products" element={<Products />} />

// 3. 在 Navbar.jsx 確認連結存在
```

### 5. 客製化按鈕樣式

**位置**：`src/components/Button.jsx` 第 25-35 行

**新增樣式變體**：
```jsx
// 在 variants 物件中新增
info: 'text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300...',
warning: 'text-white bg-yellow-700 hover:bg-yellow-800...',
```

## 🧪 測試響應式設計

### 瀏覽器測試

1. **手動調整**：拖拽瀏覽器窗口邊緣
2. **開發者工具**：
   - 按 F12 開啟開發者工具
   - 點擊設備模擬器圖標 📱
   - 選擇預設設備或自訂尺寸

### 常用測試尺寸

| 設備 | 寬度 | 測試重點 |
|------|------|---------|
| iPhone SE | 375px | 小手機體驗 |
| iPhone 12 Pro | 390px | 標準手機 |
| iPad | 768px | 平板直向 |
| iPad Pro | 1024px | 平板橫向 |
| 筆電 | 1440px | 標準桌面 |
| 4K 顯示器 | 2560px | 大螢幕 |

## 📝 開發最佳實踐

### 1. Mobile First
- 先設計手機版樣式
- 使用響應式前綴向上擴展
- 確保觸控友善

### 2. 語義化 HTML
- 使用適當的 HTML 標籤
- 提供 `alt` 文字和 `aria-label`
- 確保鍵盤導航

### 3. 效能優化
- 使用適當的圖片尺寸
- 考慮 lazy loading
- 優化 CSS 類別

### 4. 可維護性
- 保持組件單一職責
- 使用有意義的變數名稱
- 添加適當的註解

## � 常見問題解決

### 1. 樣式沒有生效
- 檢查 Tailwind CSS 類別拼寫
- 確認類別沒有被其他樣式覆蓋
- 檢查響應式前綴順序

### 2. 組件沒有響應
- 確認螢幕寬度達到斷點
- 檢查是否有 `overflow-x: hidden`
- 驗證 viewport meta tag

### 3. 圖片不響應
- 使用 `w-full` 和 `h-auto`
- 考慮使用 `object-cover` 或 `object-contain`
- 提供適當的容器約束

## 📚 進階功能

### 1. 深色模式
所有組件已支援深色模式，使用 `dark:` 前綴：
```jsx
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

### 2. 動畫效果
使用 Tailwind 的 transition 類別：
```jsx
className="transition-all duration-200 hover:scale-105"
```

### 3. 狀態管理
考慮整合：
- Context API（簡單狀態）
- Redux Toolkit（複雜狀態）
- Zustand（輕量選擇）

---

🎉 **恭喜！** 您現在已經了解如何修改和擴展這個響應式電商網站。記住，所有組件都有詳細註解，不要害怕實驗和客製化！

如需協助，請參考各組件內的註解說明。