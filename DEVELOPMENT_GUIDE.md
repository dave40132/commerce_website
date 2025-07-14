# 開發指南 - 電商網站響應式設計

## 📝 代碼註解結構說明

### 組件註解格式

所有組件都採用統一的 JSDoc 格式註解：

```javascript
/**
 * 組件名稱和簡短描述
 * 
 * 功能特色：
 * - 主要功能點1
 * - 主要功能點2
 * - 響應式設計特點
 * 
 * 響應式斷點：(如適用)
 * - 手機: < 640px - 行為描述
 * - 平板: 640px - 1024px - 行為描述
 * - 桌面: > 1024px - 行為描述
 * 
 * @param {type} paramName - 參數描述 (如適用)
 */
```

### 內聯註解規則

1. **區域註解** - 標記主要功能區域
   ```javascript
   {/* 主要功能區域 - 詳細說明 */}
   ```

2. **響應式說明** - 解釋 Tailwind 類別用途
   ```javascript
   {/* 響應式行為 - sm:text-lg 在平板以上使用大字體 */}
   ```

3. **重要邏輯註解** - 解釋複雜的邏輯或計算
   ```javascript
   {/* 根據評分生成星級顯示 */}
   ```

## 🛠️ 後續修改建議

### 1. 自定義組件修改

#### Button 組件擴展
```javascript
// 新增變體
const variants = {
  // ... 現有變體
  warning: 'text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300',
  info: 'text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-300',
};

// 新增屬性
loading: false,        // 載入狀態
icon: null,           // 圖標組件
rounded: 'lg',        // 圓角程度
```

#### 新增按鈕功能示例
```javascript
// 載入狀態
{loading && (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white">
    {/* 載入圖標 */}
  </svg>
)}

// 圖標支援
{icon && <span className="mr-2">{icon}</span>}
```

### 2. 響應式斷點自定義

#### Tailwind 配置擴展
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '475px',    // 額外小螢幕
      'sm': '640px',    // 預設小螢幕
      'md': '768px',    // 預設中等螢幕
      'lg': '1024px',   // 預設大螢幕
      'xl': '1280px',   // 預設超大螢幕
      '2xl': '1536px',  // 預設超超大螢幕
      '3xl': '1920px',  // 自定義超寬螢幕
    }
  }
}
```

### 3. 商品資料結構建議

#### 擴展商品物件
```javascript
const productSchema = {
  id: 1,
  name: '商品名稱',
  price: 'NT$ 12,999',
  originalPrice: 'NT$ 15,999',
  currency: 'TWD',                    // 貨幣代碼
  images: ['url1', 'url2'],          // 多張圖片
  category: '電子產品',               // 商品分類
  tags: ['熱銷', '新品'],           // 多個標籤
  rating: 4.8,
  reviewCount: 156,                   // 評論數量
  stock: 10,                         // 庫存數量
  description: '商品詳細描述',        // 詳細描述
  specifications: {                   // 規格資訊
    brand: '品牌名稱',
    model: '型號',
    weight: '200g'
  },
  variants: [                        // 商品變體
    { size: 'S', color: '紅色', price: 'NT$ 12,999' }
  ]
};
```

### 4. 狀態管理建議

#### Context API 實現
```javascript
// ProductContext.js
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const addToCart = (product) => {
    // 購物車邏輯
  };
  
  return (
    <ProductContext.Provider value={{ cart, wishlist, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
```

### 5. API 整合建議

#### 產品資料 API
```javascript
// api/products.js
export const fetchProducts = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters);
  const response = await fetch(`/api/products?${queryParams}`);
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  return response.json();
};
```

### 6. 效能優化建議

#### 圖片最佳化
```javascript
// 使用 Next.js Image 組件（如果使用 Next.js）
import Image from 'next/image';

<Image
  src={product.image}
  alt={product.name}
  width={300}
  height={300}
  className="rounded-t-lg object-cover"
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### 懶載入實現
```javascript
// 使用 Intersection Observer 實現懶載入
const [isVisible, setIsVisible] = useState(false);
const ref = useRef();

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.1 }
  );
  
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);
```

## 🎨 設計系統擴展

### 色彩系統
```css
/* 自定義色彩變數 */
:root {
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;
  
  --secondary-50: #f8fafc;
  --secondary-500: #64748b;
  --secondary-900: #0f172a;
}
```

### 間距系統
```javascript
// 自定義間距
const spacing = {
  'xs': '0.5rem',
  'sm': '1rem',
  'md': '1.5rem',
  'lg': '2rem',
  'xl': '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
};
```

## 📱 新增響應式組件範例

### 卡片組件
```javascript
const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-700 
        rounded-lg shadow-sm hover:shadow-md 
        transition-shadow duration-300
        p-4 sm:p-6 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
```

### 網格容器組件
```javascript
const Grid = ({ 
  children, 
  cols = { base: 1, sm: 2, lg: 3 }, 
  gap = 'md',
  className = '' 
}) => {
  const gridCols = `grid-cols-${cols.base} sm:grid-cols-${cols.sm} lg:grid-cols-${cols.lg}`;
  const gridGap = `gap-${gap}`;
  
  return (
    <div className={`grid ${gridCols} ${gridGap} ${className}`}>
      {children}
    </div>
  );
};
```

## 🧪 測試建議

### 響應式測試清單
- [ ] 手機版 (320px - 640px)
- [ ] 平板版 (640px - 1024px)
- [ ] 桌面版 (1024px+)
- [ ] 觸控功能測試
- [ ] 鍵盤導航測試
- [ ] 螢幕閱讀器相容性
- [ ] 深色模式測試

### 效能測試
- [ ] Lighthouse 評分 > 90
- [ ] 首次內容渲染 (FCP) < 1.5s
- [ ] 最大內容渲染 (LCP) < 2.5s
- [ ] 累積版面偏移 (CLS) < 0.1

## 📚 學習資源

### Tailwind CSS
- [官方文檔](https://tailwindcss.com/docs)
- [響應式設計指南](https://tailwindcss.com/docs/responsive-design)
- [自定義配置](https://tailwindcss.com/docs/configuration)

### React 最佳實踐
- [React 官方文檔](https://react.dev/)
- [React Hook 使用指南](https://react.dev/reference/react)
- [效能優化技巧](https://react.dev/learn/render-and-commit)

### 響應式設計
- [MDN 響應式設計基礎](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google 行動裝置友善測試](https://search.google.com/test/mobile-friendly)

希望這個開發指南能幫助您更好地理解和擴展這個響應式電商網站！