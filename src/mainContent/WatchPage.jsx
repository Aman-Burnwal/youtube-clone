import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeMenue } from "../assets"

const WatchPage = () => {

  const [id] = useSearchParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenue());
  }, [])



  
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + id.get('v')} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; 
        autoplay;
        clipboard-write;
        encrypted-media;
         gyroscope;
         picture-in-picture;
         web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  )
}
export default WatchPage