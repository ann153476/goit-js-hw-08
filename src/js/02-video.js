import vimeo from "@vimeo/player";
// отето vimeo 
import Throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);
//отут вставляэться |^|

    // player.on('timeupdate', function(event) {
    //     const a =event.seconds;
    //     localStorage.setItem("videoplayer-current-time", a);
    // });
    player.on('timeupdate', Throttle( (event)=> {
        const a =event.seconds;
        console.log(a);
        localStorage.setItem("videoplayer-current-time", a);
    },1000));

   const getLastTime =localStorage.getItem("videoplayer-current-time");
   //console.log( getLastTime,"этo последнее время");
   player.setCurrentTime(getLastTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
    
