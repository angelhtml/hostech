import { useState } from "react";
import Plancard from "./plancard";
import { MdArrowRight } from "react-icons/md";

export default function Plan(){
    const [date, setdate] = useState<string>("Monthly")
    return(
        <div>

            <div className="flex justify-center">
                <div style={{height:"2px"}} className="bg-deep_sea w-6 m-3"></div>
                <span className="text-deep_sea font-medium">Pricing Plans</span>
                <div style={{height:"2px"}} className="bg-deep_sea w-6 m-3"></div>
            </div>

            <div className="flex justify-center my-2">
                <h1 className="w-3/5  text-center text-2xl font-bold xl:text-5xl">Get the More Powerful With Hostech Website Hosting Plans</h1>
            </div>

            <div className="flex justify-center my-8">
                <div className="flex justify-between w-60 border-bluegray-300 border-2 text-lg font-medium p-3 rounded-full">
                    <button style={{backgroundColor: date == "Monthly" ? "#384bff" : "white", color: date == "Monthly" ? "white" : "black"}} onClick={()=> setdate("Monthly")}
                    className="p-2 rounded-full px-4">Monthly</button>
                    <button style={{backgroundColor: date == "Yearly" ? "#384bff" : "white", color: date == "Yearly" ? "white" : "black"}} onClick={()=> setdate("Yearly")}
                    className="p-2 rounded-full px-4">Yearly</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 my-8">
                <Plancard name="Shared Hosting" price={date == "Monthly" ? "29" : "339"} date={date}/>
                <Plancard name="VPS Hosting" price={date == "Monthly" ? "39" : "459"} date={date}/>
                <Plancard name="Cloud Hosting" price={date == "Monthly" ? "59" : "699"} date={date}/>
            </div>

            <center>
                <div className="text-grey">
                    <p>Cost-effective hosting that delivers secure, reliable performance.</p>
                    <div className="flex mt-4 w-56">
                            <a href="#" className="bg-blue-600 w-full p-3 font-medium text-white rounded-full flex justify-center transition-all duration-500
                            hover:bg-black"
                            >See all plans <MdArrowRight className="text-2xl" /></a>
                    </div>
                </div>
            </center>


           
            
        </div>
    )
}