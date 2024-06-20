import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Pagination from './Pagination/Pagination';

const ProductItem = ()=> {
  useEffect(()=>{
    getItems();
  },[]);

  const [Item, setItem] = React.useState([]);
  const [itemPerPage] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = Item.slice(indexOfFirstItem, indexOfLastItem);
  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getItems = () =>{
    axios
      .get('https://fakestoreapi.com/products')
      .then((res)=>{
        setItem(res.data);
        console.log(Item)
      })
      .catch((err)=>console.error(err))
  };

  return (
    <section>
      <div className="products grid grid-cols-1 gap-6 max-w-fit justify-center items-center mx-auto sm:grid-cols-1 md:mr-24 lg:grid-cols-3 w-3/5 ">
        {currentItem.map((product) => (
          <div key={product.id} className="product-item shadow-lg shadow-indigo-500/40 max-h-fit max-w-80 rounded mt-32">
            <img src={product.image} className='max-w-full h-auto' />
            <div className="product-info flex justify-between px-3 py-5">
              <div className="info">
                <h5>{product.title}</h5>
              </div>
              <div className="price">
                <h5>${product.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination ItemPerPage={itemPerPage} totalItem={Item.length} paginate={paginate}/>
    </section> 
    
  );
};

export default ProductItem