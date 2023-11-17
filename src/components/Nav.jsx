const Nav = () => {
  return (
    <nav className=" flex lg:flex-row items-center justify-between lg:py-12">
      <div className="lg:ml-8 px-12">
        <img src="/assets/shared/logo.svg" alt="Logo" className="w-[80%] lg:w-full md:w-full" />
      </div>
      <div className="  xl:block lg:hidden sm:hidden  absolute lg:w-2/6 lg:right-1/3 transform -translate-x-1/2 -translate-y-1/2 h-[1px] bg-gray-500  z-20"></div>
      <div className="relative lg:backdrop-blur-3xl bg-transparent py-8 lg:px-72 lg:z-10">
        <img
          src="/assets/shared/icon-hamburger.svg"
          className="lg:hidden md:hidden px-12"
        />
        <ul className="hidden lg:flex md:flex md:gap-4 lg:flex-row lg:justify-start lg:items-start lg:gap-14 uppercase text-lg space-x-2 px-12 lg:tracking-widest ">
          <li className="flex gap-2 cursor-pointer relative group">
            <strong>00</strong>
            <span>Home</span>
            <div className="absolute top-14 left-0 w-full h-[0.2em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>

          <li className="flex gap-2 cursor-pointer relative group">
            <strong>01</strong>
            <span>Destination</span>
            <div className="absolute top-14 left-0 w-full h-[0.2em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>
          <li className="flex gap-2 cursor-pointer relative group">
            <strong>02</strong>
            <span>Crew</span>
            <div className="absolute top-14 left-0 w-full h-[0.2em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>
          <li className="flex gap-2 cursor-pointer relative group">
            <strong>03</strong>Technology
            <div className="absolute top-14 left-0 w-full h-[0.2em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
