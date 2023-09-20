import React from 'react'
import { link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">home</Link>
            {/* A link element pointing to the home route ('/') */}
            <Link to="/about">about</Link>
            {/* A link element pointing to the about route ('/about') */}
            <Link to="/products">products</Link>
            {/* A link element pointing to the products route ('/products') */}
        </nav>
    </div>
  )
}

export default Navbar