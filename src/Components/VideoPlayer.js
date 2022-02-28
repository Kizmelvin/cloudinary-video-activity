import "cloudinary-video-player";
import { Cloudinary } from "cloudinary-core";

const cld = new Cloudinary({ cloud_name: "kizmelvin", secure: "true" });

function MyPlayer() {
  const myVid = cld.videoPlayer("player", {
    bigPlatButton: "true",
    controls: "true",
    analytics: {
      events: ["play", "paused", "ended"]
    }
  });
  myVid.source("production_ID_3741671_nknpda");
  return;
}

export default MyPlayer;
