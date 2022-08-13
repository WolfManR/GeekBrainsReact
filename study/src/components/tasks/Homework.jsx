import React from 'react'

function Homework({ number, tasks }) {
  return (
    <div>
      <div>{number}</div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Homework
