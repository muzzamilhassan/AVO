import Workus from './Workus'
const Works = () => {
  return (
    <div className="py-40">
    <h1 className="text-center text-4xl font-bold pb-10 ">OUR WORKS</h1>
    <div>
      <div>
        
        <Workus
          order1="order-1"
          order2="order-2"
          text="text-end"
          justify="justify-end"
          src='/work-images/work-1.jpg.webp'
        />

        <Workus src='/work-images/work-2.jpg.webp'/>

        <Workus
          order1="order-1"
          order2="order-2"
          text="text-end"
          justify="justify-end"
          src='/work-images/work-3.jpg.webp'
        />
     
        <Workus  src='/work-images/work-4.jpg.webp'/>
        <Workus
          order1="order-1"
          order2="order-2"
          text="text-end"
          justify="justify-end"
          src='/work-images/work-5.jpg.webp'
        />
        <Workus  src='/work-images/work-6.jpg.webp'/>
      </div>
    
    </div>
  </div>
  )
}

export default Works