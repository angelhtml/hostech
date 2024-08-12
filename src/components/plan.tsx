import { useState } from "react";
import Plancard from "./plancard";

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

            <div className="flex justify-center">
                <div className="flex justify-between w-52 border-2 border-bluegray-300 text-lg font-medium p-3 rounded-full">
                    <button onClick={()=> setdate("Monthly")}>Monthly</button>
                    <button onClick={()=> setdate("Yearly")}>Yearly</button>
                </div>
            </div>

<Plancard date={date}/>
           
            
        </div>
    )
}