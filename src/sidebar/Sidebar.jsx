import { useSelector } from "react-redux"
import { data, Button } from "../assets/index"

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    
    
    return !isMenuOpen ? <div></div> : (
        <div className="  w-[200px] shadow-lg   h-screen  overflow-y-auto ">
            
            <div className=" py-2">
                
                {data.map((item) => {

                    return <  Button name={item.name} icon={item.icon} key={item.name} />
                })

                }
            </div>

        </div>
    )
}
export default Sidebar;