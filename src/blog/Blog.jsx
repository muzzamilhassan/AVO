import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import RecentBlog from "../Components/RecentBlog";

const Blog = () => {
  return (
    <div>
      <Hero />
      <div className="px-6 sm:px-24 lg:px-[175px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-44">
        <RecentBlog img="/Blog-images/image_1.jpg.webp" />
        <RecentBlog img="/Blog-images/image_2.jpg.webp" />
        <RecentBlog img="/Blog-images/image_3.jpg.webp" />
        <RecentBlog img="/Blog-images/image_4.jpg.webp" />
        <RecentBlog img="/Blog-images/image_1.jpg.webp" />
        <RecentBlog img="/Blog-images/image_2.jpg.webp" />
        <RecentBlog img="/Blog-images/image_3.jpg.webp" />
        <RecentBlog img="/Blog-images/image_4.jpg.webp" />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
