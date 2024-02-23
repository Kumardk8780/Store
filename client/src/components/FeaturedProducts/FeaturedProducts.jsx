/* eslint-disable react/prop-types */
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';


const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(`/products?populate=*`)

  return (
    <div className='featured-products'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam quos a repudiandae cum pariatur sapiente laboriosam magni soluta ut voluptatum, aspernatur omnis corporis quibusdam maiores nemo eveniet, dicta consequatur.</p>
      </div>
      <div className="bottom">
        {
          error
            ? 'something went wrong!'
            : loading
              ? 'loading'
              :
              data.map(item =>
                <Card item={item} key={item.id} />
              )}
      </div>
    </div>
  )
}

export default FeaturedProducts