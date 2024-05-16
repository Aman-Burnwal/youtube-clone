import {  UserIcon } from "hugeicons-react"

const LiveChat = ({ name, message }) => {
     
    name = name || "Aman"
    return (
      
        <div className="grid grid-cols-12 gap-2 items-start ">
            <div className="col-span-1">
                <UserIcon className="text-black fill-black" />
            </div>

    
            <p className="font-medium  col-span-3">{name}</p>
            <p className="text-gray-700 col-span-8">{message}</p>
        </div>



        
    )
}

export default LiveChat;