import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [product, setProduct] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
   const {data}= await axios.get("https://fakestoreapi.com/products")
    setProduct(data);
    
  }
  return (
    <div className='w-9/12 mx-auto py-16'>
      <div className='grid grid-cols-4 gap-8'>
        {
          product.map((item, index)=>(
      <div key={index} className='border border-gray-300 rounded-lg p-8 shadow-lg'>
        <img src={item.image}
        className='w-full h-[220px] object-cover' 
        />
        <h1 className='text-lg font-semibold'>{item.title}</h1>
        <p className='text-gray-600'>{item.price}</p>
          </div>
          ))
        }
        
      </div>
      <button onClick={fetchData()} className='mt-12 bg-violet-600 text-white font-medium px-8 py-2 rounded'>fetch data</button>
    </div>
  )
}

export default App