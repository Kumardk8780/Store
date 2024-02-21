import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
      <Contact/>
      {/* <Products/> */}
    </div>
  )
}

export default Home