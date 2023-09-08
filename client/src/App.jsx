import './App.css'
import { useState } from 'react'
import Chatbox from './components/Chatbox'
import Header from './components/Header'
import Canvas from './components/Canvas'
import UsernameModal from './components/UsernameModal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const handleUsernameSubmit = (newUsername, newRoomNumber) => {
    setUsername(newUsername);
    setRoom(newRoomNumber);
    setIsModalOpen(false);
  }

  return (
    <div className='app'>
      <Header username={username} room={room} setIsModalOpen={setIsModalOpen} />
      <Chatbox username={username} room={room} />
      <Canvas />
      <UsernameModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onUsernameSubmit={handleUsernameSubmit}
      />
    </div>
  )
}

export default App
