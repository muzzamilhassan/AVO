import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Expert from '../Components/Expert-team'
import ClientReview from '../Components/ClientReview'
import Mainbout from '../Components/Mainbout'

const About = () => {
  return (
    <div>
<Hero/>
   <Mainbout/>
    <div className="bg-slate-100 clip-path-work px-6 sm:px-10 md:px-14 lg:px-[175px] py-10 md:py-40">
        <h1 className="py-10 text-center text-4xl font-bold">
          EXPERT TEAM
        </h1>
        <div className="grid 
        sm:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10">
          <Expert title='John Wilson' skill='Web Designer' img='/about-icons/team-1.jpg.webp'/>
          <Expert title='Adrian Henderson' skill='Web Developer' img='/about-icons/team-2.jpg.webp'/>
          <Expert title='Mike Smith' skill=' Graphic Designer' img='/about-icons/team-3.jpg.webp'/>
          <Expert title='Robert Wills' skill='System Analyst' img='/about-icons/team-4.jpg.webp'/>
          <Expert title='John Wilson' skill='Web Programmer' img='/about-icons/team-5.jpg.webp'/>
          <Expert title='Robert Wills' skill='Web Designer' img='/about-icons/team-6.jpg.webp'/>
          <Expert title='John Wilson' skill='System Analyst' img='/about-icons/team-7.jpg.webp'/>
          <Expert title='Mike Smith' skill=' Graphic Designer' img='/about-icons/team-8.jpg.webp'/>
        </div>
      </div>
      <ClientReview/>
    <Footer/>
    </div>

  )

}

export default About