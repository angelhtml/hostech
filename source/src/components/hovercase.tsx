import { hovercasetype } from "../types/hovercasetype";

export default function Hovercase(props : hovercasetype){
    return(
        <a href={props.link} className="text-black flex m-2">
            <div className="flex-1 flex justify-center items-center">
                <img className="w-12 h-12 bg-bluegray-200 p-2 border-bluegray-300 border-2 rounded-md" src={props.image} alt="pic"/></div>
            <div className="flex-2">
                <h1 className="text-center font-medium hover:text-blue-600">{props.title}</h1>
                <p className="text-silver text-sm">{props.description}</p>
            </div>
            
        </a>
    )
}