import { MdArrowRight } from "react-icons/md";
import Explorecard from "./explorecard";

export default function Explore(){
    return(
        <div className="flex justify-center">
            <div className="w-5/6">

                <div className="flex">
                    <span className="text-deep_sea font-medium">Best hosting</span>
                    <div style={{height:"1px"}} className="bg-deep_sea w-6 m-3"></div>
                </div>

                <div className="flex flex-col justify-between gap-4
                 xl:flex-row">
                    <div className="xl:w-4/6"><p className="text-2xl font-medium xl:text-5xl">Discover Most Powerful Web Hosting Features</p></div>
                    <div>
                        <div className="flex">
                            <a href="#" className="bg-blue-600 p-3 px-10 font-medium text-white rounded-full flex justify-center transition-all duration-500
                            hover:bg-black"
                            >Explore More <MdArrowRight className="text-xl m-1" /></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center my-6">

                    <Explorecard id={0} title="Dedicated Hosting" image="/images/cloud-host.png" description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."/>
                    <Explorecard id={1} title="Email Hosting" image="/images/icon-2.png" description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."/>
                    <Explorecard id={2} title="Ecommerce Hosting" image="/images/icon-3.png" description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."/>
                    <Explorecard id={3} title="Cloud Hosting" image="/images/icon-4.png" description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."/>
                    <Explorecard id={4} title="Reseller Hosting" image="/images/icon-5.png" description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."/>
                    <Explorecard id={5} title="VPS Hosting" image="/images/icon-6.png" description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."/>
                    

                </div>
                
            </div>
        </div>
    )
}