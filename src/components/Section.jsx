import React from "react";
import Image from "../assets/images/milk.jpg";

const Section = () => {
  return (
    <div className="w-full h-[530px] bg-white py-10">
      <div className="xl:w-[70%] mx-auto flex md:flex-row flex-col gap-12 ">
        <div className="w-[625px] h-[425px]">
          <img className="w-full h-full object-contain" src={Image} alt="" />
        </div>
        <div className="w-full md:h-[425px] font-normal text-2xl leading-10 flex items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          aperiam debitis cumque quae culpa explicabo dolores temporibus quidem
          aut consequatur reprehenderit dolorem, suscipit nihil repudiandae
          soluta distinctio molestiae commodi odio deleniti aspernatur quisquam
          ut unde! Nam odit ducimus molestias esse. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Et hic eum veritatis! Error a nesciunt
          quas, modi perspiciatis doloribus, assumenda aperiam ipsum magni
          cupiditate ullam! Quibusdam, impedit labore vitae harum deleniti
          optio. Doloremque non aperiam quis ipsam dolor necessitatibus id,
          facilis eaque est omnis adipisci illo quibusdam, esse error
          reiciendis! Eaque du
        </div>
      </div>
    </div>
  );
};

export default Section;
