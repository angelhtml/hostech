import { MdArrowRight } from "react-icons/md";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
  } from "react-parallax-mouse";

export default function Contact(){
    return(
        <>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div className="bg-no-repeat bg-cover bg-center flex flex-wrap justify-evenly my-4 overflow-hidden" style={{backgroundImage:`url(/images/dowrereg43nload.jpg)`}}>
            

            <div className="flex flex-col mt-16 p-6
             xl:w-3/6">
                <div className="flex">
                    <span className="text-white font-medium">Contact US</span>
                    <div style={{height:"2px"}} className="bg-white w-6 m-3"></div>
                </div>
                <h1 className="text-5xl font-bold text-white">24/7 Customer Support Here to Assist You Every Step of the Way</h1>

                    <div className="flex mt-16 w-56">
                            <a href="#" className="bg-orange-400 w-full p-3 font-medium text-white rounded-full flex justify-center transition-all duration-500
                            hover:bg-white hover:text-black"
                            >WhatsApp Now <MdArrowRight className="text-2xl" /></a>
                    </div>

            </div>
            
            <div className="flex flex-col mt-16">
            
            <MouseParallaxChild factorX={-1} factorY={0.2}>
                <img src="/images/cta-man.png" alt="user"/>
                </MouseParallaxChild>
                
            </div>
            
        </div>
        </MouseParallaxContainer>
        </>
    )
}