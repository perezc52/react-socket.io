import io from 'socket.io-client'
import { useState, useEffect } from 'react'

const Chatbox = () => {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io.connect('http://localhost:3001')
    setSocket(newSocket)

    newSocket.on('receive_message', (data) => {
      setChat(prevChat => [...prevChat, data.message])
    })

    return () => {
        newSocket.disconnect()
    }
  }, [])

  function sendMessage() {
    socket.emit('send_message', { message })
  }

  const chatElements = chat.map((message, i) => {
    return (
        <li key={i}>{message}</li>
    )
  })

  return (
    <div className="chatbox">
      <input type="text" placeholder='Message...' onChange={(e) => {setMessage(e.target.value)}} />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Chat:</h1>
      <ul>
        {chatElements}
      </ul>
    </div>
  )
}

export default Chatbox