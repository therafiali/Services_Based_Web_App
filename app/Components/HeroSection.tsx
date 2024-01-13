export default function HeroSection() {
  return (
    <div>
      <div className="hero min-h-[100vh] custom-image bg-fixed bg-center bg-no-repeat bg-base-200">
        <div className='custom-overlay'></div>
        <div className="hero-content text-center flex items-center justify-center">
          <div className="max-w-md">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-mywhite mt-52">
              Early <span className='text-myorange z-0'>Access</span> Sale
            </h1>
            <p className="py-6 scroll-m-20 text-xl font-semibold tracking-tight text-mywhite">
              SS23 styles at 50% off for Falconeri Club loyalty members only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
