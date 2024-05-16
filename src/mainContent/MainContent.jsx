import { useEffect } from "react";
import Buttons from "./Buttons";
import Video from "./Video";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appslice";


const MainContent = () => {

  const distpatch = useDispatch();

  useEffect(() => {

    distpatch(openMenu());

  }, []);


  return (
    <div className="w-full flex flex-col gap-5">
      <Buttons />
      <Video />
    </div>
    

  )

   
};

export default MainContent