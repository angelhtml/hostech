import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface options{
    title: string,
    option: string[]
    onSelected?: (newType: string) => void
}

export default function Select(props: options){

    const [open, setOpen] = useState<boolean>(false)

    return(
        <div>
        <button onClick={()=> setOpen(!open)} className="flex justify-between w-28 cursor-pointer
        hover:text-grey">
            <span className="text-lg">{props.title} </span>
            <IoIosArrowDown className="m-2"/>
        </button>

            {open && 
                <AnimatePresence>
                    <motion.div initial={{y:-10}} animate={{y:0}} className="w-28 absolute top-40 bg-white border-2 border-grey border-t-0">
                        <ul>
                            {props.option.map(i=><li key={i}>
                                <button className="w-full my-2
                                hover:text-grey" onClick={() =>{ props.onSelected?.(i); setOpen(!open)}}>{i}</button>
                            </li>)}
                        </ul>
                    </motion.div>
                </AnimatePresence> 
            }
        </div>
    )
}