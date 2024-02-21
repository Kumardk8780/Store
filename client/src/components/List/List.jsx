import React from 'react'
import './List.scss';
import Card from '../Card/Card';

const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1600',
            isNew: true,
            title: 'Watch',
            oldPrice: 19,
            price: 15,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/2517447/pexels-photo-2517447.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Eye Liner',
            isNew: true,
            oldPrice: 19,
            price: 16,
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
            price: 10,
        },
    ]

    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List