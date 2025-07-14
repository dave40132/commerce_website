import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarComponent />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">商品頁面</h1>
            </div>
          } />
          <Route path="/categories" element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">商品分類頁面</h1>
            </div>
          } />
          <Route path="/about" element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">關於我們</h1>
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">聯絡我們</h1>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
