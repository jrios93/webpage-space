import { useState } from 'react'

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className=" flex flex-col lg:flex-row  justify-around items-center ">
      <div className="lg:w-1/4 flex flex-col gap-6">
        <p className="uppercase text-3xl lg:text-[2em] sm:text-xl font-light lg:tracking-widest">
          so, you want to travel to
        </p>
        <h1 className=" text-[5em] lg:text-[8.5em] uppercase font-bellefair lg:tracking-widest">
          space
        </h1>
        <p className="text-xl lg:text-[1.4em] text-start font-light lg:tracking-wide lg:leading-loose">
          {' '}
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
          <div className="absolute w-96 h-96  bg-[#24262f] rounded-full -m-[4.4em] transition-opacity duration-150 z-10"></div>
        )}
        <div className="bg-slate-100 rounded-full w-24 h-24 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer relative z-20">
          <span className="uppercase text-slate-900 tex-lg lg:text-3xl font-bellefair lg:tracking-widest">
            explore
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
