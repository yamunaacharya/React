import { useEffect, useState } from "react";

export default function ProductPage(){
 const [products, setProducts]=useState()
 const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.jason()
    if(data && data.length) {
        setProducts(data);
    }
 };
 useEffect(() => {
    getData();
 }, []);
 return (
    <div>
        <h1>Product page</h1>
        <div style={{ display: "flex", gap: "1 rem", flexWrap: "wrap" }}>
            {products?.map((product) => (
                <Link to={`/product/${product.id}`} key={product?.id}>
                <div style={{ border: "1px solid",
                backgroundColor: "purple", color: "white", padding: "1rem"}} >
                    <img src="{product?.images}" style={{height: "3rem"}} />
                    <h3>{product?.title}</h3>
                    <h3>{product?.description}</h3>
                </div>
                </Link>
            ))}
        </div>
    </div>
 );
}