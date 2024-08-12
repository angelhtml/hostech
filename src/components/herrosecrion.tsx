import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { FaStar,FaRegStar } from "react-icons/fa6";

export default function Herrosection() {
  return (
    <>
    <div
      className="relative top-0
        xl:top-12"
    >
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <img style={{height:"100vh"}}
          className="w-full bg-center"
          src="/images/downl434fdoad.jpg"
          alt="herro"
        />

        <div className="absolute top-20 right-0">
          <MouseParallaxChild factorX={-0.3} factorY={-0.9}>
            <img src="/images/dowfd434nload.png" />
          </MouseParallaxChild>
        </div>

        <div className="absolute top-40 right-0">
          <MouseParallaxChild factorX={-0.3} factorY={-0.5}>
            <img src="/images/down6565tload.png" />
          </MouseParallaxChild>
        </div>

        <div className="absolute top-40 left-0">
          <MouseParallaxChild factorX={-0.5} factorY={-0.6}>
            <img src="/images/dowhhghgz321nload.png" />
          </MouseParallaxChild>
        </div>

        <div className="flex flex-col w-full absolute top-32
        xl:flex-row">

          <div className="flex-1">
            
          <MouseParallaxChild factorX={0.2} factorY={-0.2}>
            <div className="flex justify-center">
                <span style={{width:"auto"}} className="flex justify-center p-2 rounded-full text-orange-500 border-2 border-orange-500 text-sm
                 md:text-lg">
                    <AiOutlineThunderbolt className="text-3xl"/>Everything You Need to Create a Website</span>
            </div>
            </MouseParallaxChild>

            <div className="flex justify-center">
                <div style={{zIndex:"1"}} className="flex flex-col w-3/4">
                    <h1 className="text-lg font-extrabold text-white p-4 xl:text-6xl xl:p-11">Upgrade To Fastest Cloud Hosting Today</h1>
                    <p className="font-medium text-white px-11">Unlimited storage, unmetered bandwidth, unbeatable hosting. This gator’s got ya covered.</p>

                    <div className="flex flex-col my-8
                    xl:flex-row">
                        <div className="flex-1 flex justify-center">
                            <button className="flex text-white font-medium bg-orange-400 p-3 px-6 rounded-full text-lg
                            hover:bg-black hover:text-white">Start Free <MdArrowRightAlt className="text-3xl mx-2"/></button>
                        </div>
                        <div className="flex-1 flex justify-center my-8
                        xl:my-0">
                            <img style={{scale:".8"}} src="/images/author-img.png" alt="voters"/>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <FaStar className="text-yellow-400 text-2xl"/>
                                    <FaStar className="text-yellow-400 text-2xl"/>
                                    <FaStar className="text-yellow-400 text-2xl"/>
                                    <FaStar className="text-yellow-400 text-2xl"/>
                                    <FaRegStar className="text-yellow-400 text-2xl"/>
                                </div>
                                <span className="text-white relative top-2">450+ reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

           
            
            
            
            

            <div style={{position:"absolute",left:"-20%",top:"50vh"}}>
                <MouseParallaxChild factorX={-0.9} factorY={-0.9}>
                  <img src="/images/dgfg3xownload.png" />
                </MouseParallaxChild>
            </div>

          </div>

          <div className="flex-1 flex justify-center absolute top-56 left-24 opacity-50
          xl:static xl:opacity-100">
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
              <img src="/images/hero-llustration.png" alt="ilustration" />
            </MouseParallaxChild>
          </div>

        </div>

      </MouseParallaxContainer>

      
    </div>
    
    </>
  );
}
