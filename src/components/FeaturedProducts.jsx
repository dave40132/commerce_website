import React from 'react';
import Button from './Button';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: '時尚手機',
      price: 'NT$ 12,999',
      originalPrice: 'NT$ 15,999',
      image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Phone',
      badge: '熱銷',
      rating: 4.8
    },
    {
      id: 2,
      name: '無線耳機',
      price: 'NT$ 2,999',
      originalPrice: 'NT$ 3,999',
      image: 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=Earbuds',
      badge: '新品',
      rating: 4.6
    },
    {
      id: 3,
      name: '智能手錶',
      price: 'NT$ 8,999',
      originalPrice: 'NT$ 10,999',
      image: 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Watch',
      badge: '限時優惠',
      rating: 4.9
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">
            特色商品
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            精選優質商品，為您帶來最佳購物體驗
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  className="rounded-t-lg w-full h-64 object-cover" 
                  src={product.image} 
                  alt={product.name} 
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.badge}
                </span>
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-300'} mr-1`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => console.log(`加入購物車: ${product.name}`)}
                  >
                    加入購物車
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => console.log(`查看詳情: ${product.name}`)}
                  >
                    詳情
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => console.log('查看所有商品')}
          >
            查看所有商品
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;