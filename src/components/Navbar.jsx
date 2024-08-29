import React from 'react'

function Navbar({data}) {
  const{image,added,name,artist} = data
  return (
    <div className='w-full px-12 py-6 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className='flex bg-orange-600 px-3 py-1 text-sm text-white rounded-md gap-2'>
        <h3>Favourites</h3>
        <h4>{data.filter(item=>item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
