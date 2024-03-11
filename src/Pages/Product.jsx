import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  console.log(" Product Id ",productId)
  console.log("All products: ",all_product)
  const product = all_product.find((product) => product.id == productId);
  console.log("Find ile ciktifirst", product)


  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}
