import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch'

const Product = () => {

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img')
  const [quantity, setQuantity] = useState(0)
  const upUrl = import.meta.env.VITE_UPLOAD_URL;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='product'>
      {loading ? 'loading' : (
        <>
          <div className="left">
            <div className="images">
              <img src={upUrl+data?.attributes?.img?.data?.attributes?.url} alt="Main-Image" onClick={e => setSelectedImg('img')} />
              <img src={upUrl+data?.attributes?.img2?.data?.attributes?.url} alt="Second-Image" onClick={e => setSelectedImg('img2')} />
            </div>
            <div className="mainImg">
              <img src={upUrl+data?.attributes[selectedImg]?.data?.attributes?.url} alt="Main-image" />
            </div>
          </div>
          <div className="right">
            <h2>Title</h2>
            <span className='price'>$199</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero aspernatur nostrum nulla non accusamus soluta ut velit, voluptatem sequi quis quasi amet totam porro itaque magni aliquam odio molestias?</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>

            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product