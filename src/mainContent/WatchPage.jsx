import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { LiveChat, closeMenue } from "../assets"
import Comments from "./Comments"
import { RandomLiveComments, RandomUserNames, Replies } from "../assets/constantData"
import { pushLiveMessage } from "../utils/liveCommentSlice"
import { nanoid } from "nanoid"




const WatchPage = () => {


  const [id] = useSearchParams()
  const [userMessage, setUserMessage] = useState("")
  const dispatch = useDispatch();
  const livecomments = useSelector(state => state.livecomments.liveMessage);
  // console.log(livecomments);


  useEffect(() => {
    const innterval = setInterval(() => { 
      const usenamesLength = RandomUserNames.length;
      let index = Math.round(Math.random() * usenamesLength);
      const userName = (RandomUserNames[index]);

      let index2 = Math.round(Math.random() * RandomLiveComments.length);
      const Livecomments = (RandomLiveComments[index2]);
      if (userName.length == 0 || Livecomments.length == 0) return;
      dispatch(pushLiveMessage( [userName,  Livecomments] ));
      // console.log(Livecomments);
    }, 2000);
    
    return () =>  clearInterval(innterval);
    },[])

  // console.log(names, newLiveComment);


  useEffect(() => {
    dispatch(closeMenue());
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.length) return;
    dispatch(pushLiveMessage(userMessage));
    setUserMessage("");
    console.log("form submitted")
  }

  const CommentList = ({ comments }) => {

    return comments.map((comment) => (
      <div key={comment.id} >

        <Comments key={comment.id} data={comment} />
        <div className=" pl-5 border border-l-black ml-5">
          <CommentList comments={comment.reply} />
        </div>

      </div>
    ))

  }



  return (
    <div className=" flex flex-col  w-10/12 mx-auto ">
      <div className=" pt-10 w-full flex flex-row">
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
            allowFullScreen>

          </iframe>
        </div>


        <div className="w-full h-[320px] pt-2 pb-2 border ml-2 border-gray-500 rounded-lg ">

          <div className=" h-[90%] pl-2 w-full flex flex-col-reverse overflow-auto  ">

            {
              livecomments.map(({ name, message }) => {
                
                return <LiveChat name={name} message={message} key={nanoid()} /> // need to change id
              })
           }

            
          </div>
          <form className="w-11/12 mx-auto py-2"
            onSubmit={handleSubmit}
          >
            <input
              className=" w-full border-2 outline-none"
              type="text"

              onChange={(e) => setUserMessage(e.target.value.trimStart())}

              value={userMessage}
            >

            </input>
          </form>

        </div>

      </div>
      <div className="py-10">
        <CommentList comments={Replies} />
      </div>

    </div>

  )
}
export default WatchPage