import React from 'react'
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link to='products/1' className='link'>Sale</Link>
                    </button>
                </div>
                <div className="row"><img src="https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link to='products/1' className='link'>Women</Link>
                    </button></div>
            </div>
            <div className="col">
                <div className="row"><img src="https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link to='products/1' className='link'>New Season</Link>
                    </button></div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row"><img src="https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link to='products/1' className='link'>Men</Link>
                            </button></div>
                    </div>
                    <div className="col">
                        <div className="row"><img src="https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link to='products/1' className='link'>Accessories</Link>
                            </button></div>
                    </div>
                </div>
                <div className="row"><img src="https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link to='products/1' className='link'>Shoes</Link>
                    </button></div>
            </div>
        </div>
    )
}

export default Categories