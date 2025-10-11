
import React from 'react'
import `.../css/Header.css`;

function Header() {
  return (
    <div>
        <div>
            <img className='logo' src="./src/images.logo.jpg" alt="" />
        </div>
        <div>
            <button> Log in </button>
            <button> Sign up </button>

        </div>
    </div>
  )
}

export default Header