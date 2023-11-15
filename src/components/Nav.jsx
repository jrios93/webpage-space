const Nav = () => {
  return (
    <nav className=" flex flex-col lg:flex-row lg:items-center justify-between">
      <div className="lg:ml-8 px-12">
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div className="lg:block md:hidden sm:hidden xs:hidden flex absolute w-2/6 right-1/3  transform -translate-x-1/2 -translate-y-1/2 h-[1px] bg-gray-500  z-20"></div>
      <div className="backdrop-blur-3xl bg-transparent py-8 lg:px-72  relative z-10">
        <ul className="flex flex-col lg:flex-row lg:justify-start lg:items-start lg:gap-14 uppercase text-lg space-x-2 px-12 lg:tracking-widest ">
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
