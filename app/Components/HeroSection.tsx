"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { TypeWriter } from "@/app/Components/TypeWriter";

export default function HeroSection() {
  return (
    <div>
      <MyComponent />
    </div>

    // <div style={{ position: "relative" }}>
    //   {/* here is div A */}
    //   <div className="hero min-h-[50vh] custom-image bg-fixed bg-center bg-no-repeat bg-base-200 custom-overlay"></div>
    //   {/* here is div B */}
    //   <div
    //     className="hero-content text-center flex items-center justify-center"
    //     style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    //   >
    //     <div className=" flex flex-col justify-center items-center space-y-20">
    //       <div className="">
    //         <h1 className="text-6xl font-extrabold tracking-wide text-white">
    //         We provide IT & Business Solutions
    //         </h1>
    //       </div>
    //       <div className="">
    //         <h1 className="text-6xl font-extrabold tracking-wide text-white">
    //           <TypeWriter />
    //         </h1>
    //       </div>
    //       <p className="py-6 scroll-m-20 text-xl font-normal tracking-tight text-white max-w-md">
    //       Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

import { CSSProperties } from "react";

// const MyComponent = () => {
//   const style: CSSProperties = {
//     backgroundImage: "url(/serverroom.jpg)",
//     backgroundSize: "cover",
//     width: "100%",
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     overflow: "hidden",
//   };

//   const overlayStyle: CSSProperties = {
//     backgroundColor: "rgba(173, 216, 230, 0.5)", // light blue color with 50% opacity
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   return (
//     <div style={style}>
//       <div style={overlayStyle}>
//        <div className="space-y-14">
//        <div className="flex flex-col justify-center items-center mx-auto">
//             <h1 className="text-6xl font-extrabold tracking-wide text-black">
//             We provide IT & Business Solutions
//           </h1>
//         </div>
//         <div className="">
//           <h1 className="text-6xl font-extrabold tracking-wide text-black">
//             <TypeWriter />
//           </h1>
//         </div>
//         <p className="flex justify-center items-center py-6 scroll-m-20 text-xl font-normal tracking-tight text-black max-w-md text-center mx-auto">
//           Outlived no dwelling denoting in peculiar as he believed. Behaviour
//           excellent middleton be as it curiosity departure ourselves very
//           extreme future.
//         </p>
//        </div>
//       </div>
//     </div>
//   );
// };
const MyComponent = () => {
  const style: CSSProperties = {
    backgroundImage: "url(/serverroom.jpg)",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  };

  const overlayStyle: CSSProperties = {
    backgroundColor: "rgba(173, 216, 230, 0.5)", // light blue color with 50% opacity
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <div style={overlayStyle}>
       <div className="space-y-14">
       <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="text-6xl font-extrabold tracking-wide text-black">
            We provide IT & Business Solutions
          </h1>
        </div>
        <div className="">
          <h1 className="text-6xl font-extrabold tracking-wide text-black">
            <TypeWriter />
          </h1>
        </div>
        <p className="flex justify-center items-center py-6 scroll-m-20 text-xl font-normal tracking-tight text-black max-w-md text-center mx-auto">
          Outlived no dwelling denoting in peculiar as he believed. Behaviour
          excellent middleton be as it curiosity departure ourselves very
          extreme future.
        </p>
       </div>
      </div>
    </div>
  );
};