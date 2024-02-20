import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import {Link} from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link to='/products/3'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to='/'>DSTORE</Link>
        </div>
        <div className="right">
        <div className="center">
          <Link to='/'>Homepage</Link>
        </div>
        <div className="center">
          <Link to='/'>About</Link>
        </div>
        <div className="center">
          <Link to='/'>Contact</Link>
        </div>
        <div className="center">
          <Link to='/'>Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderIcon/>
          <div className="cartIcon">
          <ShoppingCartOutlinedIcon/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar