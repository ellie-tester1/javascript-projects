import { useState } from 'react'
import '../src/main.css'


function App() {
  const links = [
    {
      title: "Home",
      link: "https://www.youtube.com/results?search_query=bagdat"
    },
    {
      title: "About",
      link: "https://www.youtube.com/watch?v=dly6p4Fu5TE"
    },
    {
      title: "Contacts",
      link: "https://www.youtube.com/watch?v=5D-fWkQylSQ"
    },
    {
      title: "Category",
      link: "https://www.youtube.com/watch?v=i810CxN5Q6Q"
    },
    {
      title: "Projects",
      link: "https://www.youtube.com/watch?v=l1bfPhwDZsg"
    },
  ]
  const [ burger, setBurger ]= useState(false)
  
  return (
    <>
      <div className="header">
        <h1 className='logo_h1'>LOGO</h1>
        <nav className={ burger===false?"nav":"nav nav-active" }>
          {
            links.map((item) => {
              return <a href={item.link}>{item.title}</a>
            })
          }

        </nav>
        <div onClick={()=>{setBurger(false)}} className={
          burger===false
          ?"dark"
          :"dark dark-active"
        }></div>
        <button onClick={()=>{
        burger===false
        ?setBurger(true)
        :setBurger(false)
       }} className='burger'>burger</button>
      </div>

<div className="banner"></div>
      <div className='banner'></div>
    </>
  )
}

export default App
