import React from 'react'
import "../blank.css"
import { FaArrowDown } from 'react-icons/fa'

import { HashLink as Link } from 'react-router-hash-link'


export default function Blank1() {
  return (
    <div className='blank' id='blank1'>
       <h2> SCREEN 1</h2> 
       <Link className='arrowDown' to="#stackedCards">  <FaArrowDown /> </Link>
    </div>
  )
}
