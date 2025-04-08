import { useEffect, useState } from "react";
import './Learn2.css'; 

export default function Learn2() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log("------", data);
      setProducts(data);
    };
    getData();
  }, []);
  
  return (
    <div className="learn2-container">
      <h1 className="learn2-title">Learn use effect</h1>
      
      <div className="product-count">
        <p>Total Products: {products?.length}</p>
      </div>

      <div className="product-list">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-title">{product?.title}</h2>
            <h3 className="product-price">${product?.price}</h3>
            <img
              src={product?.image}
              alt={product?.title}
              className="product-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
