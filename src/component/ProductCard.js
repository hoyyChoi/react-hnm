import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

    const navigate =useNavigate()
    const spaceDetail =()=>{
        navigate(`/product/${item.id}`)
    }

  return (
    <div className='product-items' onClick={spaceDetail}>
        <img src={item?.img}/>
        <div>{item?.choice?"conscious choice":''}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new?'신제품':""}</div>
    </div>
  )
}

export default ProductCard