import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const data = [
    {name:"Appa fir Milege", image:"https://images.unsplash.com/photo-1721713168896-11db10d9740b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D", artist:"Shivam Mishra", added:false},
    {name:"buity", image:"https://images.unsplash.com/photo-1724424188343-b5ab1cfe45b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Nikhil Patre", added:false},
    {name:"Ham sath sath", image:"https://images.unsplash.com/photo-1724424188263-aac0de111e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Kaustubh", added:false},
    {name:"ishq", image:"https://images.unsplash.com/photo-1724424188263-aac0de111e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Neeraj", added:true},
    {name:"Sabar", image:"https://images.unsplash.com/photo-1724593887946-a5958b4a58a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Neeraj", added:false},
    {name:"Tum hi aana", image:"https://images.unsplash.com/photo-1724593887946-a5958b4a58a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Akash", added:false},
    {name:"Pasuri", image:"https://images.unsplash.com/photo-1708715428512-fa3285f7b4da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Vishal", added:false},
    {name:"solid body", image:"https://images.unsplash.com/photo-1723807386243-2cee8cf18e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Amit", added:false},
    {name:"supreme", image:"https://images.unsplash.com/photo-1723879580669-74779187a63e?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"Ravi", added:false},
    {name:"believer", image:"https://images.unsplash.com/photo-1718808958754-e0f24c2cbabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", artist:"Deepak", added:false}
  
  ]

  const [songData, setSongData] = useState(data)

  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item,itemIndex)=>{
        if(index === itemIndex){
          return{...item, added:!item.added}
        }
        return item
      })
    })
}


  return (
    <>
    <div className='w-full h-screen bg-zinc-300 '>
      <Navbar  data = {songData}/>
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {songData.map((obj,index)=> <Card data={obj} key={index} handleClick = {handleClick} index={index} /> )}
      </div>
    </div>
    </>
  )
}

export default App
