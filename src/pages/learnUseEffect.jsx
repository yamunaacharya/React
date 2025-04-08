import { useEffect, useState } from "react";
// export default function LearnUseEffect() {
//     const [count, setCount] = useState(0);
//     const [clicked, setClicked] = useState(0);
//     useEffect(
//         ()=>{
//             setCount(count + 1);
//         }, [clicked]
//     );
//     return (
//         <div>
//             <h1>Learn Use Effect</h1>

//             <div>{count}</div>

//             <div>
//                 <button onClick={() => setClicked(clicked + 1)}></button>
//             </div>
//         </div>
//     )
// }

export default function LearnUseEffect(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://67f37553ec56ec1a36d5deba.mockapi.io/product"
            );
    const data = await res.json();
    console.log("------", data);
    setProducts(data);
        };
    getData();
    }, []);
    return(
        <div>
            <h1>Learn use effect</h1>
            <div><p>{products?.length}</p>
            <div>
                {/* <button onClick={getData}>Refetch</button> */}
            </div>
            </div>
            <div >
                {products?.map((product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product?.name}</h1>
                            <img src={product?.avatar} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
    }