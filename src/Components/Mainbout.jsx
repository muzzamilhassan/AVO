import React from 'react'
import Aboutus from './Aboutus'
const Mainbout = () => {
  return (
    <div className='py-40'>
      <div>
        <h1 className='text-center text-4xl uppercase font-bold'>About Us</h1>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-6 sm:px-24 lg:px-[175px] gap-4'>
          <Aboutus title='app development' src="/about-icons/app-development.png"/>
          <Aboutus title='UI/UX design' src="/about-icons/curve.png"/>
          <Aboutus title='web development' src="/about-icons/web-development.png"/>
          <Aboutus title='SEO' src="/about-icons/seo.png"/>
          <Aboutus title='product design' src="/about-icons/product.png"/>
        </div>
        <section className="container mx-auto px-6 sm:px-24 lg:px-[175px] py-12 text">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center md:text-end">
          <h1 className="text-4xl font-bold mb-4">Welcome to AVO A Personal Portfolio Web Agency</h1>
          <p className="text-gray-600 mb-8">
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p className="text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 mt-6 w-max">View all projects</button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/about.jpg.webp" alt="Office" className="w-full md:h-screen rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="text-center">
            <h2 className="text-3xl text-red-600 font-bold mb-2">{`0${i + 1}`}</h2>
            <h3 className="text-lg font-semibold mb-2">Search Engine Optimization</h3>
            <p className="text-gray-600">Far far away, behind the word mountains</p>
          </div>
        ))}
      </div>
    </section>
      </div>
    </div>
  )
}

export default Mainbout