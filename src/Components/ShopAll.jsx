// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Banner from './Banner';
// import SearchBar from './SearchBar';
// import ProductCard from './ProductCard';
// import './ShopAll.css';

// const ShopAll = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [categoriesRes, productsRes] = await Promise.all([
//           axios.get('http://127.0.0.1:5000/api/categories'),
//           axios.get('http://127.0.0.1:5000/api/products/1'),
          
//         ]);

//         console.log('Categories:', categoriesRes.data);
//         console.log('Products:', productsRes.data);

//         if (Array.isArray(categoriesRes.data)) {
//           setCategories(categoriesRes.data);
//         } else {
//           console.error('Categories data is not an array');
//           setCategories([]);
//         }

//         if (Array.isArray(productsRes.data)) {
//           setProducts(productsRes.data);
//           setFilteredProducts(productsRes.data);
//         } else {
//           console.error('Products data is not an array');
//           setProducts([]);
//           setFilteredProducts([]);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setCategories([]);
//         setProducts([]);
//         setFilteredProducts([]);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (query) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredProducts(filtered);
//   };

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="shop-all">
//       <Banner images={['https://assets.vogue.com/photos/5ee7e4567760032c3ba72260/master/w_2560%2Cc_limit/00_story.jpg', 'https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg', 'https://opinionatedmale.com/wp-content/uploads/2013/04/NYFW-black-women-Fashion-OpinionatedMaleblog-1140x803.jpg']} />
//       <SearchBar onSearch={handleSearch} />
//       <div className="product-categories">
//         {categories.map((category) => (
//           <div key={category.id} className="category-section">
//             <h2>{category.name}</h2>
//             <div className="product-grid">
//               {(filteredProducts || []).filter((product) => product.category_id === category.id)
//                 .map((product) => (
//                   <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopAll;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import './ShopAll.css';

const ShopAll = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories first
        const categoriesRes = await axios.get('http://127.0.0.1:5000/api/categories');
        const categoriesData = categoriesRes.data;

        setCategories(categoriesData);

        // Fetch products for each category
        const productsData = {};

        for (const category of categoriesData) {
          const productsRes = await axios.get(`http://127.0.0.1:5000/api/categories/${category.id}/products`)
          ;
          productsData[category.id] = productsRes.data;
        }

        setProductsByCategory(productsData);

      } catch (error) {
        console.error('Error fetching data:', error);
        setCategories([]);
        setProductsByCategory({});
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filteredData = {};

    // Filter products in each category based on the search query
    Object.keys(productsByCategory).forEach((categoryId) => {
      filteredData[categoryId] = productsByCategory[categoryId].filter((product) =>
        product.name.toLowerCase().includes(lowercasedQuery)
      );
    });

    setProductsByCategory(filteredData);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className='cont'>
       <Banner images={[
        'https://assets.vogue.com/photos/5ee7e4567760032c3ba72260/master/w_2560%2Cc_limit/00_story.jpg',
        'https://img.freepik.com/free-photo/graceful-french-female-model-enjoying-portrait-sensual-caucasian-girl-red-beret-black-skirt_197531-20339.jpg',
        'https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg',
        'https://opinionatedmale.com/wp-content/uploads/2013/04/NYFW-black-women-Fashion-OpinionatedMaleblog-1140x803.jpg',
        'https://img.freepik.com/free-photo/fashion-photo-graceful-brunette-woman-spring-outfit-posing-holding-white-bag_273443-4124.jpg',
        'https://cdn.dribbble.com/users/9355434/screenshots/17357989/media/03ed746ec611b7a7eda3ecbc64a9f528.jpg?resize=400x0',
        'https://cdn.create.vista.com/downloads/bd6cf32a-34ed-4568-aa85-53b0e84aa3ea_1024.jpeg',
        'https://www.stylerave.com/wp-content/uploads/2022/02/0FC53C4C-1C59-44AC-BC45-EE899BEE906E.jpeg',
        'https://img.freepik.com/free-photo/good-humoured-young-girl-white-gumshoes-posing-with-ice-cream-serious-lady-beret-sitting-floor-eating-dessert_197531-20451.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720915200&semt=ais_user',
        'https://images.indianexpress.com/2019/10/short-girl-dressing-tips.jpg?w=414'
        
        ]} />
       <SearchBar onSearch={handleSearch} />
    <div className="shop-all">

      <div className="product-categories">
        {categories.map((category) => (
          <div key={category.id} className="category-section">
            <h2>{category.name}</h2>
            <div className="product-grid">
              {productsByCategory[category.id]?.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default ShopAll;
