import React from 'react'

function Card({data,handleClick ,index}) {
  const{image,added,name,artist} = data
  return (
    <>
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-3 relative pb-12 mt-20'>
      <div className='w-20 h-20 bg-orange-400 rounded-md'>
        <img className='w-full h-full object-cover rounded-md' src={image} alt="" />
      </div> 
      <div>
      <h3 className='text-xl leading-none font-semibold'>{name}</h3>
      <h6 className='text-sm mt-2'>{artist}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className={`absolute bottom-1 py-2 text-xs text-white ${added === false ? "bg-orange-600" : "bg-teal-600"} rounded-full px-3 -translate left-14`}>{added === true ? "added" : "Add to Favourites"}</button>
    </div>
    </>
  )
}

export default Card
