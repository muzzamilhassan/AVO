
const Expert = ({img,title,skill}) => {
  return (
    <div className="space-y-3 font-semibold hover:text-[#DC2626] relative group">
      <img src={img} alt="" className="w-full sm:h-auto h-72 object-cover flex justify-start"/>
     <h1 className="text-2xl capitalize font-bold">{title}</h1>
     <h5 className="tracking-widest font-medium text-[#DC2626]">{skill}</h5>

     <div className=" absolute top-2 left-4 space-y-4 opacity-0 group-hover:opacity-100 transition-all">
       <img src="/about-icons/google.png" alt="" className="bg-white p-2 w-8 rounded-full cursor-pointer"/>
       <img src="/about-icons/twitter.png" alt=""  className="bg-white p-2 w-8 rounded-full cursor-pointer"/>
       <img src="/about-icons/facebook.png" alt=""  className="bg-white p-2 w-8 rounded-full cursor-pointer"/>
       <img src="/about-icons/social-media.png" alt=""  className="bg-white p-2 w-8 rounded-full cursor-pointer"/>
     </div>
    </div>
  )
}

export default Expert