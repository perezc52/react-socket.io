import './App.css'
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
const socket = io.connect('http://localhost:3001')

function App() {

  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])

  function sendMessage() {
    socket.emit('send_message', { message })
  }

  return (
    <div className="App">
      <input type="text" placeholder='Message...' onChange={(e) => {setMessage(e.target.value)}} />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Chat</h1>
      {messageReceived}
    </div>
  )
}

export default App
