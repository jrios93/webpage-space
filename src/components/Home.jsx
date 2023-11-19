import { useState } from 'react'

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-around justify-center items-center  mb-2 lg:py-12">
      <div className="lg:w-1/4 md:w-1/2 w-4/5 flex flex-col gap-4 lg:items-start items-center lg:mt-24">
        <p className="uppercase text-xl md:text-2xl tracking-widest lg:text-[2em] text-start  font-light">
          so, you want to travel to
        </p>
        <h1 className=" text-[6em] md:text-[8rem] lg:text-[8.5em] uppercase font-bellefair lg:tracking-widest">
          space
        </h1>
        <p className="text-lg md:text-lg lg:text-[1.4em] lg:text-start  text-center font-light lg:tracking-wide lg:leading-relaxed">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="absolute lg:w-96 lg:h-96 w-60 h-60  bg-[#24262f] rounded-full lg:-m-[3em] md:mt-14  lg:mt-[12rem] -m-[1.50rem] mt-14 transition-opacity duration-150 z-10"></div>
        )}
        <div className="bg-slate-100 rounded-full w-48 h-48 lg:w-72 lg:h-72 flex items-center justify-center cursor-pointer relative z-20 lg:mr-2 lg:mt-60 mt-20">
          <span className="uppercase text-slate-950 text-2xl lg:text-3xl font-bellefair lg:tracking-widest">
            explore
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
