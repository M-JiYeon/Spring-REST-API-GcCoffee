import React from "react";
import {Product} from "./Product";

export function ProductList({products = [], onAddClick}) {
  return (
    <React.Fragment>
      <h5 className="flex-grow-0"><b>상품 목록</b></h5>
      <ul className="list-group products">
        {products.map(v =>
          <li key={v.productId} className="list-group-item d-flex mt-3">
            <Product {...v} onAddClick={onAddClick}/>  { /* argument 와 property 가 동일할 때 ...v 로 표현하면 안의 내용이 나열되서 매핑 */}
          </li>
        )}
      </ul>
    </React.Fragment>
  )
}