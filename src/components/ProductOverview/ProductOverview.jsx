import ProductCard from "./InfoCard";
import ProductPics from "./ProductPics";

function ProductOverview(){

    return(
        <div className="flex justify-center flex-wrap">
            <ProductPics/>
            <ProductCard/>
            <div></div>
        </div>
    )
}

export default ProductOverview;