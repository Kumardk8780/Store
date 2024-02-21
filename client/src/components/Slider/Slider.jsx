import './Slider.scss'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useState } from 'react';

// import React from 'react'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/19866070/pexels-photo-19866070/free-photo-of-happy-woman-in-beige-pants-sitting-in-studio-with-orange-drink-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/19906657/pexels-photo-19906657/free-photo-of-wedding-dress-handing-on-chandelier.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/20175173/pexels-photo-20175173/free-photo-of-a-woman-standing-on-the-beach-with-her-arms-outstretched.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }


    return (
        <div className='slider'>
            Slider
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}} >
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider