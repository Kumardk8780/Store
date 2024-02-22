import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import axios from 'axios';

const FeaturedProducts = ({ type }) => {



  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1600',
      isNew: true,
      title: 'Watch',
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/2517447/pexels-photo-2517447.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Eye Liner',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/6187595/pexels-photo-6187595.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Utensils',
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/8117815/pexels-photo-8117815.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Camera Stand',
      oldPrice: 19,
      price: 12,
    },
  ]

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL+"/products", {
         headers: {
          Authorization: "bearer "+ import.meta.env.VITE_API_TOKEN,
         }
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[])


  return (
    <div className='featured-products'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam quos a repudiandae cum pariatur sapiente laboriosam magni soluta ut voluptatum, aspernatur omnis corporis quibusdam maiores nemo eveniet, dicta consequatur.</p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts