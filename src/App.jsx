import { useState } from 'react'

import Task from './components/Task'
import Servers from './components/Servers'
import Settings from './components/Settings'
import Add from './components/Add'
import './style/Main.css'
import { useQuery } from '@tanstack/react-query'


const getTasks = async () => {
   const response = await fetch("http://localhost:8000/") 
   return await response.json()
  }

function App() {
 
  const {data, isLoading} = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })
  if (isLoading) return <div>Loading</div>
  const list = data.defs || []
  console.log(data)
  
  
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
