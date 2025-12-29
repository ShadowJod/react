import React, { useState } from 'react'

const App = () => {

  const [alluser, setalluser] = useState([])
  const [name, setname] = useState('')

  const formHandle = (e) =>{
    e.preventDefault();
    const newUsers = [...alluser]
    newUsers.push(name);
    console.log(newUsers);
    setalluser(newUsers);
    setname('');
    
  }
  return (
    <div>
      <form onSubmit={function(e){
        formHandle(e);
      }}>
        <input  value={name} onChange={(e)=>{
          setname(e.target.value);
        }} type="text" placeholder='Enter Here....' />
        <input type="submit" />
      </form>
         
        {
          alluser.map((ele,idx)=>{
             return <h2 key={idx}>{ele}</h2>
          })
        }
      </div>
  )
}

export default App