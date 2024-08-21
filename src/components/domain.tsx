import { useState } from "react";
import Select from "./select";

export default function Domian(){
    const [selected, setSelected] = useState<string>("")
    return(
        <div>
        <div className="flex justify-center relative -top-20
         md:-top-32">
            <div className="w-5/6 bg-deep_sea flex flex-col items-center rounded-xl
            xl:w-4/6">
                <h1 className="font-medium text-2xl text-white text-center p-10 xl:text-5xl">Find Your Perfect Domain Name</h1>

                <div className="bg-white h-16 w-5/6 flex justify-between rounded-md">
                    <input className="focus:outline-none rounded-md mx-5 w-28 
                    md:w-auto" type="text" placeholder="domain.com"/>
                    <div className="w-64 hidden
                     md:flex md:justify-around md:items-center my-2">
                        <Select onSelected={(i)=> setSelected(i)} title={selected == "" ? ".com" : selected} option={[".com",".net",".info",".store"]}/>
                    </div>

                    <button className="bg-orange-400 text-white px-4 scale-90 font-medium rounded-md text-sm
                     md:px-8 md:text-lg">Serach now</button>

                </div>

                <div className="w-5/6 flex flex-wrap gap-2 justify-center my-10
                 md:w-4/6 md:gap-10">

                    <div className="bg-sea_light text-white p-3 rounded-lg">
                        <span className="font-medium">.com | $9.95</span>
                    </div>
                    <div className="bg-sea_light text-white p-3 rounded-lg">
                        <span className="font-medium">.info | $11.99</span>
                    </div>
                    <div className="bg-sea_light text-white p-3 rounded-lg">
                        <span className="font-medium">.net | $8.95</span>
                    </div>
                    <div className="bg-sea_light text-white p-3 rounded-lg">
                        <span className="font-medium">.store | $10.5</span>
                    </div>
                    <div className="bg-sea_light text-white p-3 rounded-lg">
                        <span className="font-medium">.org | $11.95</span>
                    </div>

                </div>
            </div>

            
        </div>
        
        </div>
    )
}