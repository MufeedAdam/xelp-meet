import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'
import './App.css'

const App = () => {

  
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')
  const [message,setMessage] = useState('')
  const handleClick = event => {
    event.preventDefault()
    if(!room && !name)
      setMessage("Please, Enter Room and User name")
    else if(!room)
     setMessage("Please, Enter Room name")
    else if(!name)
     setMessage("Please, Enter User name")
    else
      setMessage('')
    if (room && name) setCall(true)
  }

  return (
    <div>
      <h1>Jitsi  &#123; XELP &#125; Meet !</h1>
      
      {call ? (<Jutsu
        roomName={room}
        password={password}
        displayName={name}
        onChange= {(e)=> console.log("Yes YES :: ",e)}
        containerStyles={{ width: '100%', height: '700px' }}
        onClick = {(e)=> console.log("Yes",e)}
        onMeetingEnd={() => window.location.href="/"}
        loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
        : (
          <form>
            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
           <br></br> <button onClick={handleClick} type='submit'>
              Start / Join
            </button><br/>
            <p style={{color:'red'}}>{message}</p>
            
          </form>
        )}
      
    </div>
  )
}

export default App