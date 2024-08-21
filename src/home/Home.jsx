import ClientReview from "../Components/ClientReview";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Mainbout from "../Components/Mainbout";
import Poster from "../Components/Poster";
import RecentBlog from "../Components/RecentBlog";
import About from "../about/About";
import Works from "../Components/Works";
import { motion } from "framer-motion"
const Home = () => {
  return (
    <div className="selection:bg-[#D1002C] selection:text-white">
      <Hero />
      {/* <About /> */}
      <Mainbout/>
      <div className="bg-slate-100 clip-path-work">
        {/* <Work /> */}
        <Works/>
      </div>
      <ClientReview />
      <Poster />
      <div className="bg-slate-100 clip-path-work px-6 sm:px-20 md:px-[175px] py-40">
        <motion.h1  className="py-10 text-center
        text-2xl sm:text-4xl font-bold">
          RECENT BLOGS
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <RecentBlog img="/Blog-images/image_1.jpg.webp" />
          <RecentBlog img="/Blog-images/image_2.jpg.webp" />
          <RecentBlog img="/Blog-images/image_3.jpg.webp" />
          <RecentBlog img="/Blog-images/image_4.jpg.webp" />
        </div>
      </div> 
      <Footer />
    </div>
  );
};

export default Home;
