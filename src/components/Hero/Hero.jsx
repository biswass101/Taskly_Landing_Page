import React from "react";
import './Hero.css'
import gbook from "../../assets/images/girl_with_book.png";
import sGirl from "../../assets/images/staring_girl.png";
import rightArrow from "../../assets/images/arrow_right_alt.png";
import icon1 from "../../assets/images/little_icon_man.png";
import icon2 from '../../assets/images/liitle_icon_man_2.png'
import blurr from '../../assets/images/ellips_1.png'
const Hero = () => {
  return (
    <>
      <div className="blur-effects absolute top-[-60px]">
        <img src={blurr} alt="" />
      </div>
      <div className="Hero-container flex flex-col justify-center pb-32">
      <div className="mt-5 hero-text text-white flex flex-col text-[3.5rem] font-[900] -tracking-[4px] self-center">
        <p>Get Set Done,</p>
        <p className="ml-[30px]">Stress Less</p>
      </div>
      <div className="photo-text-grid-section w-[85vw] mx-auto mt-5">
        <div className="grid-container flex gap-5">
          <div className="co1 flex flex-col justify-between">
            <div className="item1 bg-[#9FE88E] rounded-xl pt-[5rem] pb-[3rem] px-6">
              <div className="flex flex-col text-[#000] text-2xl font-bold ">
                <span>Your Tasks More</span>
                <span>Organized More Precise</span>
              </div>
            </div>
            <div className="item4 bg-[#9FE88E] rounded-xl pt-7 relative overflow-hidden">
              <div className="px-6 flex flex-col gap-2 pb-2">
                <p className="text-[#000] text-2xl font-bold">Why Taskly? </p>
                <p className="text-sm underline">Learn More</p>
              </div>
              <img className="relative bottom-[-5px]" src={sGirl} alt="sGirl" />
            </div>
          </div>
          <div className="item2 relative">
            <img src={gbook} alt="gbook" />
            <img
              className="absolute top-[20%] right-[43%]"
              src={icon1}
              alt=""
            />
            <div className="users flex absolute rounded-full left-4 bottom-8 px-3 py-2 items-center">
              <div className="flex">
                <img className="h-9 w-9 relative left-0" src={icon1} alt="" />
                <img className = "relative left-[-16px]" src={icon2}alt="" />
                <img className = "relative left-[-30px]" src={icon2} alt="" />
              </div>  
              <p className="font-semibold ml-[-20px]">100+ Actice Users</p>
            </div>
          </div>
          <div className="col2 flex flex-col gap-5">
            <div className="item4 bg-[#9FE88E] rounded-xl pt-7 relative overflow-hidden">
              <div className="px-6 flex flex-col gap-2 pb-2">
                <p className="text-[#000] text-2xl font-bold">
                  Tims Success by Taskly
                </p>
                <p className="text-sm underline">Learn More</p>
              </div>
              <img className="relative bottom-[-5px]" src={sGirl} alt="sGirl" />
            </div>

            <div className="item5 btn-container">
              <button className="btn-explore bg-[#9FE88E] flex gap-2 text-2xl font-[400] rounded-full px-10 py-1">
                <p>Explore Now</p>
                <img src={rightArrow} alt="ra" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
