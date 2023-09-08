import io from 'socket.io-client'
import { useState, useEffect } from 'react'

const Chatbox = (props) => {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io.connect('http://localhost:3001')
    setSocket(newSocket)

    newSocket.on('receive_message', (data) => {
      setChat(prevChat => [...prevChat, data])
    })

    return () => {
        newSocket.disconnect()
    }
  }, [])

  function sendMessage() {
    socket.emit('send_message', { username: props.username, message: message })
  }

  const chatElements = chat.map((data, i) => {
    return (
        <li key={i}>{`${data.username}: ${data.message}`}</li>
    )
  })

  return (
    <div className="chatbox">
      <div className="chat">
        <ul>
          {chatElements}
        </ul>
      </div>
      <div className="message">
        <input type="text" placeholder='Message...' onChange={(e) => {setMessage(e.target.value)}} />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default Chatbox