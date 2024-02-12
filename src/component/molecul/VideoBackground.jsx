import vid from '../../assets/bg-vid.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-background__video">
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;