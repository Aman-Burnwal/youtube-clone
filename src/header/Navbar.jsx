// import { Menu01Icon } from '@hugeicons/react-pro';

import { useDispatch } from "react-redux";
import menu from "../assets/menu_2976215.png";
import youtube_logo from "../assets/youtube-logo-png-46020-Windows.ico"
import { toggleMenu } from "../assets";

const Navbar = () => {
    const dispatch = useDispatch();

    const toggleMunuHandler = () => {
        // console.log("toggleMunuHandler")
        dispatch(toggleMenu())
    }

    return (
        <div className="w-full shadow-lg ">
            <div className="mx-2  grid grid-rows-1 grid-cols-12 h-16 items-center " >

                <div className="col-span-2 ">
                    {/* menu , logo*/}


                    <div className="flex flex-row items-center   gap-5 justify-center">
                        <div className="" onClick={toggleMunuHandler}><img
                            src={menu}
                            className="h-5 cursor-pointer"
                        >
                        </img></div>
                        <div>
                            <img
                                src={youtube_logo}
                                className=""

                            >
                            </img>
                        </div>
                
                    </div>
                </div>
                <div className="col-span-8  ">
                    <div className="flex flex-row  items-center justify-center ">
                        <div className="w-9/12  flex items-center">
                            <input type="text"
                                className=" border outline-blue-300 border-slate-900 rounded-l-full text-center h-8  text-slate-700 w-full"
                                placeholder="search" >

                            </input>
                        </div>
                        <div className="w-3/12 ">

                            <button className="border  border-slate-900  rounded-r-full   w-7 h-8" >

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-4  mx-auto">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </button>
                        </div>

                    </div>

                </div>

                <div className="col-span-2">

                    
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row   gap-4">


                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                            </div>

                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}
export default Navbar