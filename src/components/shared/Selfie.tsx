// import { Button } from "arvara-pckage";
// import React, { useEffect, useRef } from 'react'
// import { toast } from 'react-toastify';

const Selfie = () => {
//   const videoRef = useRef(null);
//   const photoRef = useRef(null);

//   const getUserCamera = () => {
//     navigator.mediaDevices.getUserMedia({
//       video:true
//     }).then((stream) => {
//       const video = videoRef.current
//       video.srcObject =stream;
//       video.play()
//     }).catch((error) => {
//       toast.error(error)
//     })
//   }

  // const takePicture = () => {
  //   const width =500
  //   const height =width/(16/9)
  //   const photo = photoRef.current
  //   const video = videoRef.current
  //   //set the photo width and height
  //   photo.width = width;
  //   photo.height = height;

  //   const ctx = photo.getContext('2d')
  //   ctx.drawImage(video,0,0,photo.width,photo.height)
  // }

  // useEffect(() => {
  //   getUserCamera()
  // }, [videoRef])

  return (
    <>
    <section>
      <h1>Selfie App</h1>
      {/* <video ref={videoRef}></video> */}
      {/* <Button onClick={() => takePicture}>Take selfie</Button> */}
      {/* <canvas ref={photoRef}></canvas> */}
    </section>
    </>
  )
}

export default Selfie
