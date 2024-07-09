import React from 'react'
import './Header.css'
import 'typeface-open-sans'; // Importa la fuente Open Sans

function Header() {
  return (
    <div className='header flex items-center' >
        <h1 className='tittle-header w-1/5 ml-20'>Release Notes</h1>
    </div>
  )
}

export default Header