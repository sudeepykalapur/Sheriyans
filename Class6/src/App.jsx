import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  function submitHandler(e){
    e.preventDefault();
    console.log(title);
    setTitle('');
    
  }
  return (
    <div className='bg-black h-screen text-white p-6'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='bg-amber-300 p-6 flex gap-6 text-black '>
        <input className='px-6 py-4 text-2xl rounded'
         type="text" 
         placeholder='Enter your Name' 
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
        />
        <button className='px-6 py-4 text-2xl font-bold rounded border-2 active:scale-95 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default App