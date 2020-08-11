import React from 'react'

const Navbar = ({ toggleMode, darkmode }) => {
  return (
    <nav className='navbar'>
      <h1>Crypto Tracker</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkmode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default Navbar
