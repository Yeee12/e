import React from 'react'
import './navbar.css'
import { ShoppingCart } from 'phosphor-react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to ='/'>shop</Link>
                <Link to ='/cart'>
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;