import { useState } from 'react'

import Task from './components/Task'
import Servers from './components/Servers'
import Settings from './components/Settings'
import Add from './components/Add'
import './style/Main.css'

function App() {
 
  const list = ['Media Download','Update & Reboot','VPN off']
  
  return(
  <>
 
  <div className='header'>
    <div className='headerLeft'>
      <Servers></Servers>
    </div>
    <div className='headerRight'>
      <Settings/>
      <Add/>
    </div>
  </div>
  <div>
    
  </div>
     <div className='tasks'>
    {list.map(name => <Task name={name}/>)}

  </div>
  
  </>
 )
}

export default App
