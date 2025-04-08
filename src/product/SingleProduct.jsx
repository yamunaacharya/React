import { useParams } from "react-router";
export default function SingleProductPage(){
    const{ id } = useParams();
    return(
        <div>
            <h1>Single Product Pages </h1>
            {id};
        </div>
    )
}