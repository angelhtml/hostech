interface card {
    id: number
    image: string,
    title: string,
    description: string
}

export default function Explorecard(props: card){
    return(
        <div className="w-5/6 flex justify-center xl:w-1/3 xl:my-0">
            <div style={{width:"90%"}} className="my-4 bg-bluegray-100 border-2 border-bluegray-200 rounded-md shadow-sm">
                <div className="flex -mr-16 z-10">
                    <img className="w-16 h-16 bg-bluegray-100 p-2 outline-1 outline-bluegray-100 outline border-white border-r-4 border-b-4 rounded-r-xl" src={props.image} alt="pic"/> 
                    <h1 className="text-lg font-medium m-4 mx-8">{props.title}</h1>
                    </div>
                    <p className="p-4 text-coolgray-500">{props.description}</p>
                </div>
        </div>
    )
}