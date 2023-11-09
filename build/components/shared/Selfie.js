import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsx(_Fragment, { children: _jsx("section", { children: _jsx("h1", { children: "Selfie App" }) }) }));
};
export default Selfie;
