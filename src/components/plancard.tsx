import { FaCheck,FaTimes } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

export default function Plancard(props: {date: string, price: string, name: string}){

    return(
        <div className="flex flex-col w-5/6 bg-white shadow-lg rounded-md
        md:w-auto">

            <div className="flex items-center justify-between gap-4">
                <img className="p-4" src="/images/icon-1.png" alt="img"/>
                <div className="flex flex-col">
                    <h1 className=" font-bold text-2xl">{props.name}</h1>
                    <span>Collaboratively formulate</span>
                </div>
                <span className=" font-bold text-2xl p-4">${props.price}</span>
            </div>
            <div style={{width:"90%",height:"1px",marginLeft:"5%"}} className=" bg-silver mb-4"></div>

            <div className="my-8">
                <div className=" relative left-0 bottom-0
                xl:left-15 xl:bottom-10">
                    <img style={{position:"absolute"}} src="/images/wing-shape.png" alt="effect"/>
                </div>
                <div className="flex mx-7">
                    <FaCheck className="text-blue-600 m-2 text-xl"/>
                    <p className="font-medium text-grey p-2">Branding and design Identity</p>
                </div>
                <div className="flex mx-7">
                    <FaCheck className="text-blue-600 m-2 text-xl"/>
                    <p className="font-medium text-grey p-2">Web site Marketing Solutions</p>
                </div>
                <div className="flex mx-7">
                    <FaCheck className="text-blue-600 m-2 text-xl"/>
                    <p className="font-medium text-grey p-2"> Free 15 GB Linux Hosting</p>
                </div>
                <div className="flex mx-7">
                    <FaCheck className="text-blue-600 m-2 text-xl"/>
                    <p className="font-medium text-grey p-2"> Unlimited Application Installation</p>
                </div>
                <div className="flex mx-7">
                    <FaCheck className="text-blue-600 m-2 text-xl"/>
                    <p className="font-medium text-grey p-2">Unlimited Download Data</p>
                </div>
                <div className="flex mx-7">
                    <FaTimes className="text-red-600 m-2 text-xl"/>
                    <p className="font-medium text-grey p-2">Dedicated IP Address</p>
                </div>

                <center>
                    <div className="flex mt-4 w-56">
                            <a href="#" className="bg-blue-600 w-full p-3 font-medium text-white rounded-full flex justify-center transition-all duration-500
                            hover:bg-black"
                            >Get A Quote <MdArrowRight className="text-2xl" /></a>
                    </div>
                </center>
            </div>


        </div>
    )
}