import React from 'react'
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
 
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1600',
            isNew: true,
            title: 'Watch',
            oldPrice: 19,
            price: 12,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod dolore molestias unde, natus doloremque praesentium dicta! Inventore accusantium, sapiente, quos praesentium necessitatibus provident nam quae consectetur temporibus ab tempore'
          },
          {
            id: 2,
            img: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/2517447/pexels-photo-2517447.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Eye Liner',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod dolore molestias unde, natus doloremque praesentium dicta! Inventore accusantium, sapiente, quos praesentium necessitatibus provident nam quae consectetur temporibus ab tempore',
            isNew: true,
            oldPrice: 19,
            price: 12,
          },
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,50)}</p>
                    <div className="price">
                        1 x {item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart