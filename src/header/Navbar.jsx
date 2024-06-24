// import { Menu01Icon } from '@hugeicons/react-pro';

import { useDispatch, useSelector } from "react-redux";
import menu from "../assets/menu_2976215.png";
import youtube_logo from "../assets/youtube-logo-png-46020-Windows.ico"
import { cacheResults, toggleMenu , } from "../assets";
import { useEffect, useState } from "react";
import { serachQueryUrl } from "../assets/constantData";
import MenuIcons from "./MenuIcons";
import { clearCache } from "../utils/serachslice";




const Navbar = () => {
    const dispatch = useDispatch();

    const [serachQuery, setSerachQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState("");
    const [showsuggestions, setShowSuggestions] = useState(false);

   


    const toggleMunuHandler = () => {

        dispatch(toggleMenu())
    }

    const fetchSuggestions = async (query) => {

        if (query.length == 0) {
            setSearchSuggestions("");
            dispatch(clearCache());
            setShowSuggestions(() => false);
        }
 

        const url = serachQueryUrl + query;
        
        const response = await fetch(url);
  

        const json = await response.json();
     
        dispatch(cacheResults({ [query] : json[1] }))
        
        setSearchSuggestions(json[1]);
    
    }
    const searchCache = useSelector((store) => store.search)

    // console.log(searchCache)



    useEffect(() => {


        const searchDebouncer = setTimeout(() => {
            // console.log("searcQuery")
            if (searchCache[serachQuery]) {
                // console.log(searchCache[serachQuery])
                setSearchSuggestions(searchCache[serachQuery]);
            }
            else fetchSuggestions(serachQuery)
        }, 300)

        return () => clearTimeout(searchDebouncer);


    }, [ serachQuery])







    return (
        <div className="w-full shadow-lg ">
            <div className="mx-2  grid grid-rows-1 grid-cols-12 h-16 items-center relative " >

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
                <div className="col-span-8  relative ">
                    <div className="flex flex-row  items-center justify-center  ">
                        <div className="w-9/12  flex items-center ">
                            <input type="text"
                                className=" border outline-blue-300 border-slate-900 
                                rounded-l-full pl-10 h-8  text-slate-700 w-full"
                                placeholder="search"
                                onChange={(e) => setSerachQuery(e.target.value.trimStart())}
                                onFocus={() => {
                                    // console.log("onFocus", showsuggestions)
                                    return setShowSuggestions(() => true);
                                }}

                                onBlur={() => {
                                    // console.log("onBlur", showsuggestions)
                                    return setShowSuggestions(() => true)
                                }}
                                value={serachQuery}

                            >

                            </input>
                            
                        </div>
                        <div className="w-3/12 ">

                            <button className="border  border-slate-900  rounded-r-full   w-7 h-8" >

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-4  mx-auto">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </button>
                        </div>
                        
                        
                        
                    </div>
                    <div className="absolute  text-justify rounded-lg bg-opacity-75 bg-white">
                       
                        {showsuggestions && searchSuggestions &&   searchSuggestions.map(
                            (suggest) => <div
                                key={suggest}
                                className="hover:bg-slate-500  font-medium rounded-lg cursor-pointer pb-2 pl-10 pr-[380px]"
                            >{suggest}
                            </div>)}
                    </div>

                </div>

                <div className="col-span-2">


                    <div className="flex flex-row justify-center">
                            <MenuIcons />
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Navbar