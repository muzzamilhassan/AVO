import React from "react";

const RecentBlog = ({img}) => {
 
  return (
     
    <div className="space-y-3 font-semibold">
      <h1>Amplify your blockchain team</h1>

      <img src={img} alt="" className="w-full h-72"/>
      <h5>june 01, 2024</h5>
      <p className="text-gray-400">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia.
      </p>
    </div>
  
  );
};

export default RecentBlog;
