const VideoContainer = ({ data }) => {

    function getTimeDifference(publishTime) {

        const currentTime = new Date().getTime();
        const publishDate = new Date(publishTime).getTime();
        const difference = currentTime - publishDate;

        // Define time units in milliseconds
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const month = 30 * day;
        const year = 365 * day;

        // Calculate time difference in various units
        const years = Math.floor(difference / year);
        const months = Math.floor(difference / month);
        const days = Math.floor(difference / day);
        const hours = Math.floor(difference / hour);
        const minutes = Math.floor(difference / minute);

        // Format the output
        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
    }
    
    // console.log(data);
    const { thumbnails, 
        publishTime,
        title,
        description , channelTitle} = data;

    const VideoUplodTime = getTimeDifference(publishTime);
    
    

  return (
      <li className="flex flex-col gap-4 w-80 h-80  overflow-hidden">
          <div>
              <img src={thumbnails?.medium.url}
                  height={thumbnails?.medium?.height}
                  width={thumbnails?.medium?.width}
              ></img>
          </div>


          <div className="flex flex-col ">
              {/* logo */}
              <div></div>
              <div>
                  <p>{title}</p>
                  <p>{channelTitle}</p>
                  <div>
                      <p>{ }</p>
                      <p>{VideoUplodTime}</p>
                  </div>
                  
              </div>

              
          </div>
    </li>
  )
}
export default VideoContainer