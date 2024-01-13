

export default function HeroSection() {
  return (
    <div style={{position: 'relative'}}>
      {/* here is div A */}
      <div className="hero min-h-[100vh] custom-image bg-fixed bg-center bg-no-repeat bg-base-200 custom-overlay"></div>
      {/* here is div B */}
      <div className="hero-content text-center flex items-center justify-center" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-6xl font-extrabold tracking-wide text-white">We provide IT & Business Solutions</h1>
          <p className="py-6 scroll-m-20 text-xl font-semibold tracking-tight text-white">
            SS23 styles at 50% off for Falconeri Club loyalty members only.
          </p>
        </div>
      </div>
    </div>
  );
}
