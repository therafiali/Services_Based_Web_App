import { CSSProperties } from "react";


export default function Hero() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

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
    backgroundColor: "rgba(0, 32, 96, 0.5)", // light blue color with 50% opacity
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };

  return (
    <div style={style}>
      <div className="h-full w-full flex flex-col justify-center items-start " style={overlayStyle}>
        <div className="space-y-5 md:space-y-14 mx-auto ml-5 md:ml-16 ">
          <div className="flex flex-col mx-auto max-w-[40rem] ">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-6xl text-white ">
              Digital Technology Solutions, Consulting & Services
            </h1>
          </div>

          <div>
            <p className="max-w-md leading-7 [&:not(:first-child)]:mt-6 text-white">
            Digital Workspaces provides Technology Solutions, Consulting and services for businesses of all sizes across all over the World. We provide smart, cutting-edge technology solutions for all your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};