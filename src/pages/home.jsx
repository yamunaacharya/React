// import { useState } from "react";

// const list = [
//     {
//         id: 1,
//         name: "Alina",
//         age: 44,
//     },
//     {
//         id: 3,
//         name: "Pamela",
//         age: 34,
//     },
//     {
//         id: 5,
//         name: "Shanti",
//         age: 64,
//     },
// ];

// export default function Homepage(){
//     const [count, setCount] = useState(0);
//     function handleInc() {
//         setCount(count + 1);
//     }
//     function handleDec(){
//         setCount(count - 1);
//     }
//     function handleCount(type) {
//         if(type === "inc") {
//             setCount(count + 1);
//         }else{
//             setCount(count - 1);
//         }
//     }
//     return(
//         <div>
//         <h1>Home Page</h1>
//         <div>
//             {count}
//             <div>
//                 <button onClick={()=> setCount(count + 1)}>INC</button>
//                 <button onClick={()=> setCount(count - 1)}>DEC</button>
//             </div>

//             <div>
//                 <p>with function</p>
//                 <button onClick={handleInc}>INC</button>
//                 <button onClick={handleDec}>DEC</button>
//             </div>

//             <div>
//                 <p>with function with parameter</p>
//                 <button onClick={() => handleCount("inc")}>INC</button>
//                 <button onClick={handleCount}>DEC</button>
//             </div>
//         {/* <input /> */}
//         </div>
//         {/* <div>
//         {list.map((list, index) => (
//             <div>{index}
//             <Card data={list}/>
//             </div>
//         ))}
//         </div> */}
//         </div>
//     );
// }

// const Card = ({ data }) => {
//     return(
//         <div style={{ backgroundColor: "purple", border: "1px solid white" }}>
//             <h2>{data.name}</h2>
//             <p>age: {data.age}</p>
//         </div>
//     );
// };




// export function Homepage(){
//     let count = 4;
//     return (
//         <div>
//             <h1>Parent component</h1>
//             <ChildComp count={count} greet="hello" name={"Alina"} />
//             <ChildComp count={count} greet="Welcomeback" name={"Alina"} />
//             <SecondChildcomp greet="Welcome" />
//         </div>
//     );
// }

// const SecondChildcomp = (props) => {
//     return(
//         <div>
//             <h2>SecondChildComp</h2>
//             <div>{props.greet}</div>
//         </div>
//     );
// };

// export const ChildComp = ({count, greet = "Welcome", ...rest}) => {
//     return (
//         <div style={{backgroundColor: "grey", border: "1px solid"}}>
//             <p>Child component</p>
//             <div>
//             {greet} {rest.name}
//             </div>
//             <SubChildComp count ={count} />
//        </div>
//     );
// };

// const SubChildComp =({count})=>{
//   return (
//     <div>
//         <h2>SubSChildComp</h2>
//         {count}
//     </div>
//   );
// };


