import {MdOutlineEmail, MdOutlinePhone, MdOutlineChat, MdPersonOutline, MdOutlineSearch, MdOutlineMenu} from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar(){
    return(

        <div className="z-50 fixed w-full">
            {/* show in xl */}
            <div className="w-full h-12 bg-blue-800 text-white hidden
            xl:flex xl:justify-evenly xl:items-center xl:gap-10">
    
                <a className="flex" href="mailto:info@example.com"><MdOutlineEmail className="text-xl mx-1 my-1" /> info@example.com</a>
                <a className="flex" href="tel:+208-6666-0112"><MdOutlinePhone className="text-xl mx-1 my-1" /> +208-6666-0112</a>
                <span className="flex gap-1">Hostech Flash Discount: Starting at <span className="text-orange-500"> $3.49/mo </span> for a Limited time</span>
                <a className="flex" href="#"><MdOutlineChat className="text-xl mx-1 my-1" /> Live Chat</a>
                <a className="flex" href="#"><MdPersonOutline className="text-xl mx-1 my-1" /> Login</a>
            </div>

            <div className="w-full h-12 flex">
                <div className="flex-1 flex">
                    <button className="mx-10"><img src="/public/images/white-logo.svg" alt="icon"/></button>
                </div>
                <ul className="hidden text-white font-medium
                xl:flex xl:flex-4 xl:justify-around xl:items-center">
                    <li className="flex cursor-pointer">Home<FaAngleDown className="mx-1 text-lg relative top-1"/></li>
                    <li className="flex cursor-pointer">Pages<FaAngleDown className="mx-1 text-lg relative top-1"/></li>
                    <li className="flex cursor-pointer">Hosting<FaAngleDown className="mx-1 text-lg relative top-1"/></li>
                    <li className="flex cursor-pointer">Doming</li>
                    <li className="flex cursor-pointer">News<FaAngleDown className="mx-1 text-lg relative top-1"/></li>
                    <li className="flex cursor-pointer">Help Center<FaAngleDown className="mx-1 text-lg relative top-1"/></li>
                </ul>
                <div className="flex-1 flex justify-end">
                    <button className=" text-white text-2xl mx-2"><MdOutlineSearch /></button>
                    <button className=" text-white text-2xl mx-2"><MdOutlineMenu /></button>
                </div>
            </div>
        </div>
    )
}