import React from 'react'
import "./Header.css"
import CardBack from "./CardBack"
import CardFront from "./CardFront"

const Header = () => {
  return (
    <header>
        <CardBack />
        <CardFront />
    </header>
  )
}

export default Header