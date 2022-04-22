import React from 'react'
// import VideoPlayer from 'react-video-js-player'
import ReactPlayer from 'react-player'
// import Car from '../assets/Video/port.mp4'
import './Video.css'


const Video = () => {
  // const videoSrc=Car;
  // const poster= "https://image.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"
  return (
    <div className='cont'>
      <h3>PROJECT VIDEO</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=lVJLNsLNnWs&t=90s" className="video"/>
    </div>
  )
}

export default Video