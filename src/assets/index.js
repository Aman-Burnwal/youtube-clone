import Navbar from "../header/Navbar";
import Body from "../Body/Body";
import Sidebar from "../sidebar/Sidebar";
import Button from "../sidebar/Button";
import MainContent from "../mainContent/MainContent";
import store from "../utils/store";
import appslice from "../utils/appslice";
import TopicBtn from "../mainContent/TopicBtn";
import Buttons from "../mainContent/Buttons";
import Video from "../mainContent/Video";
import VideoContainer from "../mainContent/VideoContainer";
import WatchPage from "../mainContent/WatchPage";
import { toggleMenu, closeMenue } from "../utils/appslice";
import { cacheResults} from "../utils/serachslice"



// constant data
import { data , buttonList, url} from "./constantData";
export {
    closeMenue,
    cacheResults,
    Buttons,
    WatchPage,
    Video,
    VideoContainer,
    Navbar,
    Body,
    Sidebar,
    MainContent,
    Button, 
    TopicBtn,


    store,
    appslice,
    toggleMenu,

    data,
    buttonList,
    url

}