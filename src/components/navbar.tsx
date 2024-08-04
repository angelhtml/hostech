import {MdOutlineEmail, MdOutlinePhone, MdOutlineChat, MdPersonOutline, MdOutlineSearch, MdOutlineMenu, MdOutline1KPlus} from "react-icons/md";
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Hovercase from "./hovercase";
import { hovercasetype } from "../types/hovercasetype";
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar(){

    const [hovername, setHovername] = useState<string>("")
    const [openmenu, setOpenmenu] = useState<boolean>(false)
    const [menu, setMenu] = useState<string>("")

    // data
    const [pagedata, setPagedata] = useState<hovercasetype[]>(
        [
            {
                _id:0,
                title: "About Us",
                description: "About hostech",
                image: "/images/about.png",
                link: "#"
            },
            {
                _id:1,
                title: "Black Friday",
                description: "Excellent offer",
                image: "/images/black-friday.png",
                link: "#"
            },
            {
                _id:2,
                title: "Affiliate",
                description: "Best Provider",
                image: "/images/affiliate.png",
                link: "#"
            },
            {
                _id:3,
                title: "Pricing",
                description: "Flexible Plans",
                image: "/images/pricing.png",
                link: "#"
            },
            {
                _id:4,
                title: "Pricing Package",
                description: "Flexible Plans",
                image: "/images/pricing.png",
                link: "#"
            },
            {
                _id:5,
                title: "Data Center",
                description: "Worldwide Data Center",
                image: "/images/data-center.png",
                link: "#"
            },
            {
                _id:6,
                title: "Services",
                description: "Best Services Provider",
                image: "/images/service.png",
                link: "#"
            },
            {
                _id:7,
                title: "Team",
                description: "Experts Member",
                image: "/images/team.png",
                link: "#"
            },
            {
                _id:8,
                title: "Team Details",
                description: "Experts Member",
                image: "/images/team.png",
                link: "#"
            },
            {
                _id:9,
                title: "Error Pages",
                description: "Back to Home",
                image: "/images/error.png",
                link: "#"
            },
        ]
    )

    const [hosting, setHosting] = useState<hovercasetype[]>(
        [
            {
                _id:0,
                title: "Share Hosting",
                description: "About hostech",
                image: "/images/share-host.png",
                link: "#"
            },
            {
                _id:1,
                title: "Reseller Hosting",
                description: "Excellent Offer",
                image: "/images/reseller-shost.png",
                link: "#"
            },
            {
                _id:2,
                title: "Dedicated Hosting",
                description: "Flexible Plans",
                image: "/images/host-service.png",
                link: "#"
            },
            {
                _id:3,
                title: "VPS Hosting",
                description: "Flexible Plans",
                image: "/images/vps-host.png",
                link: "#"
            },
            {
                _id:4,
                title: "Node js Hosting",
                description: "Best Provider",
                image: "/images/wordpress-host.png",
                link: "#"
            },
            {
                _id:5,
                title: "Cloud Hosting",
                description: "Worldwide Data Center",
                image: "/images/cloud-host.png",
                link: "#"
            },
        ]
    )

    // Animations
    const hover_animation = {
        initial:{ y: 95, opacity: 0 },
        animate:{ y: 85, opacity:1 },
        transition:{duration:.3}
    }

    const menu_animation = {
        initial:{ x: 100, opacity: 1 },
        animate:{ x: 0, opacity:1 },
        transition:{duration:.3},
    }

    /*
    useEffect(() => {
        console.log(hovername)
    },[hovername])*/

    return(

        <div className="z-10 fixed w-full">
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
                    <button className="mx-10"><img src="/images/white-logo.svg" alt="icon"/></button>
                </div>
                <ul className="hidden text-white font-medium
                xl:flex xl:flex-4 xl:justify-around xl:items-center">

                    <li onMouseEnter={()=> setHovername("home")} onMouseLeave={()=> setHovername("")}>
                        <span className="flex cursor-pointer hover:text-orange-500">Home<FaAngleDown className="mx-1 text-lg relative top-1"/></span>
                        {hovername == "home" && <motion.ul initial={hover_animation.initial} animate={hover_animation.animate} transition={hover_animation.transition} 
                        className="bg-white absolute top-0 w-80 rounded-md py-6">
                            <Hovercase _id={0} title="Web Hosting" link="#" description="Powerful bare metal server" image="/images/web-host.png"/>
                            <Hovercase _id={1} title="Hosting Services" link="#" description="Flexible virtual machine" image="/images/host-service.png"/>
                            <Hovercase _id={2} title="Hosting Solutions" link="#" description="Powerful Hosting solutions" image="/images/host-solut.png"/>
                            <Hovercase _id={3} title="Hosting Agency" link="#" description="Big hosting agency" image="/images/host-agen.png"/>
                        </motion.ul>}
                    </li>

                    <li onMouseEnter={()=> setHovername("pages")} onMouseLeave={()=> setHovername("")}>
                        <span className="flex cursor-pointer hover:text-orange-500">Pages<FaAngleDown className="mx-1 text-lg relative top-1"/></span>
                        {hovername == "pages" && <motion.ul initial={hover_animation.initial} animate={hover_animation.animate} transition={hover_animation.transition}
                         className="bg-white absolute top-0 w-4/6 rounded-md py-6 flex flex-wrap">
                            {pagedata.map((i : hovercasetype) => <div className="w-72"> <Hovercase _id={i._id} title={i.title} link={i.link} description={i.description} image={i.image}/></div>)}
                        </motion.ul>}
                    </li>

                    <li onMouseEnter={()=> setHovername("hosting")} onMouseLeave={()=> setHovername("")}>
                        <span className="flex cursor-pointer hover:text-orange-500">Hosting<FaAngleDown className="mx-1 text-lg relative top-1"/></span>
                        {hovername == "hosting" && <motion.ul initial={hover_animation.initial} animate={hover_animation.animate} transition={hover_animation.transition}
                         className="bg-white absolute top-0 w-3/6 rounded-md py-6 flex flex-wrap">
                            {hosting.map((i : hovercasetype) => <div className="w-72"> <Hovercase _id={i._id} title={i.title} link={i.link} description={i.description} image={i.image}/></div>)}
                        </motion.ul>}
                    </li>

                    <a href="#" className="flex cursor-pointer hover:text-orange-500">Doming</a>

                    <li onMouseEnter={()=> setHovername("news")} onMouseLeave={()=> setHovername("")}>
                        <span className="flex cursor-pointer hover:text-orange-500">News<FaAngleDown className="mx-1 text-lg relative top-1"/></span>
                        {hovername == "news" && <motion.ul initial={hover_animation.initial} animate={hover_animation.animate} transition={hover_animation.transition}
                         className="bg-white absolute top-0 w-52 flex flex-col text-black">
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">News Grid</a>
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">News List</a>
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">News Details</a>
                        </motion.ul>}
                    </li>

                    <li onMouseEnter={()=> setHovername("help")} onMouseLeave={()=> setHovername("")}>
                        <span className="flex cursor-pointer hover:text-orange-500">Help Center<FaAngleDown className="mx-1 text-lg relative top-1"/></span>
                        {hovername == "help" && <motion.ul initial={hover_animation.initial} animate={hover_animation.animate} transition={hover_animation.transition}
                         className="bg-white absolute top-0 w-52 flex flex-col text-black">
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">Faq</a>
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">Error 404</a>
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">Support</a>
                            <a href="#" className="p-4 hover:bg-blue-600 hover:text-white transition-all duration-500">Contact us</a>
                        </motion.ul>}
                    </li>

                </ul>
                <div className="flex-1 flex justify-end">
                    <button className=" text-white text-2xl mx-2"><MdOutlineSearch /></button>
                    <button onClick={()=> setOpenmenu(!openmenu)} className=" text-white text-2xl mx-2"><MdOutlineMenu /></button>
                </div>
            </div>

            {/* Drawer with animtion */}
            <AnimatePresence>
            {openmenu ? (<motion.div exit={{ x: 500, transition: {duration: .4} }} initial={menu_animation.initial} animate={menu_animation.animate} transition={menu_animation.transition} 
            className="bg-white w-96 h-screen z-20 absolute top-0 right-0" onClick={(e) => e.stopPropagation()}>
                <div className="flex m-6">
                    <div className="flex-1 flex items-center"><img src="/images/black-logo.svg" alt="icon"/></div>
                    <div className="flex-1 flex justify-end"><IoCloseCircleSharp onClick={()=> setOpenmenu(!openmenu)} className={"text-blue-600 text-5xl"}/></div>
                </div>

                {/* Drawer description it will be hide in phones screen */}
                <div className="hidden
                xl:flex">
                    <p className="p-4 px-8 text-grey">Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.</p>
                </div>

                {/* phone navigation in accardeon style */}
                <div className="flex flex-col m-4
                xl:hidden">
                    <button onClick={()=> setMenu("home")} className="flex justify-between py-2"><span className="font-medium hover:text-orange-500">Home</span><FaPlus className={"relative top-1 hover:text-orange-500"}/></button>
                    <hr />
                    {menu == "home" && <motion.div className="my-2"><a className="m-8" href="#">Web Hosting</a><hr /></motion.div>}
                    
                </div>

                {/* Contact info section */}
                <div className="flex flex-col m-4">
                    <h1 className="font-bold text-lg mx-4">Contact Info</h1>
                </div>
                
            </motion.div>): null}
            </AnimatePresence>

        </div>
    )
}