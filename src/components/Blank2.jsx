import React from 'react'
import "../blank.css"
import { FaArrowUp } from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link'

export default function Blank2() {
  return (
    <div className='blank' id='blank2'>
        <Link className='arrowUp' to="#stackedCards"> <FaArrowUp /> </Link>
        <h2> SCREEN 2 </h2>
    </div>
  )
}
