import React, { useState } from 'react'

export default function TodoHeader() {
    const [input, setInput] = useState("")
  return (
    <form id='new-task-form'>
        <div>
           <input 
           id='new-task-input'
           type="text"
           name='text'
           value={input}
           className='todo-input'
           placeholder='What do you have planned?'
           style={{width: "600px"}}
           />
           <button id="new-task-submit">Add todo</button>
        </div>
    </form>
  )
}

