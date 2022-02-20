import Product from "../product/Product";
import { products } from "../../data";
import "./productList.css";


const ProductList = () => {
  return (
    <>
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
         The following projects depicts the practical implementation of what I grasped and performed while learning different technologies.
        </p>
      </div>
   
    <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} imgg={item.img} linkk={item.link} link11={item.link1}
           title={item.title} project={item.project} project1={item.project1}/>
        ))}
    </div>
    </div>
    </>

  );
};

export default ProductList;
