import React from 'react'

const Workus = ({order1,order2,text,justify,src}) => {
  return (
    <div className=''>
        <div className='grid md:grid-cols-2 px-4 lg:px-[175px] '>
            <section className={` py-2 px-10 md:${order2}`}>
                <img src={src} alt="image missing" className={`w-full md:h-96`}/>
            </section>
            <section className={`capitalize flex flex-col justify-center px-10 space-y-4 md:${order1,text}`}>
                <h6 className='text-[12px] font-semibold tracking-widest'>web design</h6>
                <h1 className='text-4xl'>cassettee tape</h1>
                <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className={`flex py-4 items-center gap-4 md:${justify}`}>
                    <img src="/work-images/person.jpg" alt="" className='w-12 h-12 rounded-full'/>
                    <div className='text-sm'>
                        <h1 >muzzideveloper</h1>
                        <h2 className='text-gray-400 lowercase'>muzzideveloper.com</h2>

                    </div>
                </div>
                <div className='tracking-[4px] text-[12px]'>

                <button className='border-2 py-2 px-4 rounded'>VIEW PORTFOLIO</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Workus