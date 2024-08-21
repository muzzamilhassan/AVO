import React from 'react'

const Aboutus = ({title,src}) => {
  return (
    <div className='p-4 space-y-8 capitalize tracking-widest text-nowrap font-semibold flex flex-col justify-center items-center'>
        <img src={src} alt="image missing" className='w-20'/>
        <h1>{title}</h1>
    </div>
  )
}

export default Aboutus