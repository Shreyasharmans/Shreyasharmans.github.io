import "./product.css";
import React  from "react";


const Product = ({imgg,linkk,link11,title,project,project1}) => {
  return (
  

      <div className="card">
			<div className="face face1">
				<div className="content">
				<img src={imgg} alt="" className="p-img"/>
					<h3>{title}</h3>
				</div>
			</div>
			<div className="face face2">
				<div className="content"><br></br><br></br><br></br>
					<p>Click Below</p>
					<a href={linkk}><h4>{project}</h4></a>
          <a href={link11}> <h4 className={(project1==="") ? 'hdn' : 'vsbl'}>{project1}</h4></a>
				</div>
			</div>
		</div>


  );
};

export default Product;
