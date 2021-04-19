import React from 'react';
import ProductRow from '../product-row/product-row';
import ProductRow2 from '../product-row/product-row2';
import ProductRow3 from '../product-row/product-row3';
import ProductRow4 from '../product-row/product-row4';
import ProductRow5 from '../product-row/product-row5';
import ProductRow6 from '../product-row/product-row6';
import ProductCategoryRow from '../products-category-row/product-category-row';
import ProductCategoryRow2 from '../products-category-row/product-category-row2';
import './product-table-style.css';
 const ProductTable = () =>{

    return (
      <div className ='product-table-container'>
         
        <table className ='style-table'> 
        <tr>
          <th>Name</th>
          <th>Price</th> 
        </tr>
        </table>
        
      <ProductCategoryRow/>
      <ProductRow/>
      <ProductRow2/>
      <ProductRow3/>
      <ProductCategoryRow2/>
      <ProductRow4/>
      <ProductRow5/>
      <ProductRow6/>
      </div>  
    );
}

export default ProductTable;