import "../styles/_basebackground.scss";

const BaseBackground = () =>{
 return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        onError={() => console.error("Video failed to load")}
      >
        <source src="/skazkaprotebya.mp4" type="video/mp4" />
      </video>
    </div>
 )

}

export default BaseBackground;