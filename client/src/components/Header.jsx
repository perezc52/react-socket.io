import { useState } from 'react'

const Header = (props) => {

  return (
    <div className='header'>
      <h1>Brainstorm</h1>
      <h4>Username: {props.username}</h4>
      <h4>Room #: {props.room}</h4>
    </div>
  )
}

export default Header