

export default function Host(){
    return(
        <div>
                    <div className="flex flex-wrap justify-center my-4 overflow-hidden">
            

            <div className="flex flex-col mt-16 p-6 relative
             xl:w-3/6 xl:left-24">
                <div className="flex">
                    <span className="text-deep_sea font-medium">Best hosting</span>
                    <div style={{height:"2px"}} className="bg-deep_sea w-6 m-3"></div>
                </div>
                <h1 className="text-5xl font-bold">Get Started Fast & Easily with Best Hosting</h1>

                <div style={{maxWidth:"32rem"}} className="text-black items-center p-8 mt-4 rounded-lg bg-bluegray-200 flex my-2">
                    <div className="m-2 items-center">
                        <img style={{minWidth:"50px",}} className=" bg-bluegray-200 p-2 border-bluegray-300 border-2 rounded-md" src="/images/icon-9.png" alt="pic"/></div>
                    <div className="flex flex-col ml-2">
                        <h1 className="font-medium hover:text-blue-600">Better Security and faster Server</h1>
                        <p className=" text-sm">Cursus libero sit amet ultrices. Nullam sit amet ornare neque duis vitae congue ante, nec tempus quam. Donec non.</p>
                    </div>
                </div>

                <div style={{maxWidth:"32rem"}} className="text-black items-center p-8 mt-4 rounded-lg bg-bluegray-200 flex my-2">
                    <div className="m-2 items-center">
                        <img style={{minWidth:"50px",}} className=" bg-bluegray-200 p-2 border-bluegray-300 border-2 rounded-md" src="/images/icon-10.png" alt="pic"/></div>
                    <div className="flex flex-col ml-2">
                        <h1 className="font-medium hover:text-blue-600">Better Security and faster Server</h1>
                        <p className=" text-sm">Cursus libero sit amet ultrices. Nullam sit amet ornare neque duis vitae congue ante, nec tempus quam. Donec non.</p>
                    </div>
                </div>

            </div>
            
            <div className=" mt-16 scale-75">
            
                <img src="/images/hosting.png" alt="user"/>
                
            </div>
            
        </div>
        </div>
    )
}