import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeMenue } from "../assets"
import Comments from "./Comments"
import { Replies } from "../assets/constantData"


const WatchPage = () => {

  const [id] = useSearchParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenue());
  }, [])

  
  const CommentList = ({comments}) => {

    return comments.map((comment) => (
      <div key={comment.id} >
        <Comments key={comment.id} data={comment} />
        <div className=" pl-5 border border-l-black ml-5">
          <CommentList comments={comment.reply}/>
        </div>
        
      </div>
    ))

  }


  
  return (
    <div className="pl-20">
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
        allowFullScreen>
        
      </iframe>
      <div className="pt-10">
        <CommentList comments={Replies} />
      </div>
      

    </div>
  )
}
export default WatchPage