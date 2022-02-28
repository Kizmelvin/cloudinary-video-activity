import "./styles.css";
import { useEffect } from "react";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import MyPlayer from "./Components/VideoPlayer";

export default function App() {
  useEffect(() => {
    MyPlayer();
  }, []);
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      <h2>Tracking user activities on a cloudinary video</h2>

      <div style={{ width: "600px", height: "400" }}>
        <video
          controls
          muted
          className="cld-video-player cld-fluid"
          id="player"
        />
      </div>
    </div>
  );
}
