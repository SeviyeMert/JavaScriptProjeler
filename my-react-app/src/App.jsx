import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './data'
import Course from './Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      {
        courses?.map((course)=>(
          <Course key={course.id} course={course}/>
        ))
      }
    </div>
  )
}

export default App
