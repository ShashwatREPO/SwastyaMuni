import React from 'react'
import Logo from '../assets/logo.svg'

export default function LogoSvg({small = false}) {
  return (
    <img src={Logo} className={small ? "w-36" : "w-48 "}></img>
  )
}
