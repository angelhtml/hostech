
  import {  MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
  import { FaAngleRight, FaTelegramPlane } from "react-icons/fa";
  
  export default function Footer() {
    return(
        <footer>
            <div className="mt-4">
                    <div className="bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(/images/do3553dfswnload.jpg)`}}>
                        <div className="flex justify-center">
                            <div className="flex flex-wrap justify-center text-white 
                            xl:w-5/6">

                                <div className="w-64 flex flex-col p-4 
                                xl:my-16">
                                    <img className=" scale-75" src="/images/white-logo.svg" alt="icon"/>
                                    <p className="my-4">Nullam interdum libero vitae pretium aliquam donec nibh purus laoreet in ullamcorper vel malesuada.</p>
                                    <a className="flex my-2 hover:text-orange-500" href="mailto:info@example.com"><MdOutlineEmail className="text-xl mx-1 my-1" /> info@example.com</a>
                                    <a className="flex my-2 hover:text-orange-500" href="tel:+208-6666-0112"><MdOutlinePhone className="text-xl mx-1 my-1" /> +208-6666-0112</a>
                                </div>

                                <div className="w-64 flex flex-col p-4 
                                xl:my-16">
                                    <h1 className="text-2xl font-bold">Compony</h1>
                                    <div style={{backgroundColor:"white",height:"2px",width:"50%"}} className="my-2 mb-8"></div>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Hostech About</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Contact Us</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Pricing Plans</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />FAQ`S</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Privacy Policy</a>
                                </div>

                                <div className="w-64 flex flex-col p-4 
                                xl:my-16">
                                    <h1 className="text-2xl font-bold">Hosting</h1>
                                    <div style={{backgroundColor:"white",height:"2px",width:"50%"}} className="my-2 mb-8"></div>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Share Hosting</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Reseller Hosting</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />VPS Hosting</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Cloud Hosting</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Dedicated Hosting</a>
                                </div>

                                <div className="w-64 flex flex-col p-4 
                                xl:my-16">
                                    <h1 className="text-2xl font-bold">Support</h1>
                                    <div style={{backgroundColor:"white",height:"2px",width:"50%"}} className="my-2 mb-8"></div>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Login Account</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Register Account</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Submit Ticket</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Support Center</a>
                                    <a className="flex my-2 transition-all duration-500 hover:text-orange-500 hover:translate-x-2" href="#"><FaAngleRight className="text-xl mx-1 my-1" />Live Chat</a>
                                </div>

                                <div className="w-64 flex flex-col p-4 mb-16
                                 xl:my-16">
                                    <h1 className="text-2xl font-bold">Newsletter</h1>
                                    <div style={{backgroundColor:"white",height:"2px",width:"50%"}} className="my-2"></div>
                                    <p className="my-4">Sign up to seargin weekly newsletter to get the latest updates.</p>
                                    <div className="border-2 h-12 border-silver flex rounded-md">
                                        <input className="focus:outline-none rounded-md mx-5 w-36 bg-transparent" type="text" placeholder="Enter Email Address"/>
                                        <FaTelegramPlane className="text-2xl m-2 cursor-pointer"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
  }