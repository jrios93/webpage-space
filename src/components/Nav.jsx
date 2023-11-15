const Nav = () => {
  return (
    <nav className=" flex justify-between items-center">
      <div className=" px-20">
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div className="backdrop-blur-3xl bg-transparent py-8 px-32">
        <ul className="flex justify-between gap-14 uppercase text-sm space-x-2 ">
          <li className="flex gap-2 cursor-pointer relative group">
            <span className=" font-semibold">00</span>
            <span>Home</span>
            <div className="absolute top-12 left-0 w-full h-[0.1em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>

          <li className="flex gap-2 cursor-pointer relative group">
            <span className=" font-semibold">01</span>
            <span>Destination</span>
            <div className="absolute top-12 left-0 w-full h-[0.1em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>
          <li className="flex gap-2 cursor-pointer relative group">
            <span className=" font-semibold">02</span>
            <span>Crew</span>
            <div className="absolute top-12 left-0 w-full h-[0.1em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>
          <li className="flex gap-2 cursor-pointer relative group">
            <span className=" font-semibold">03</span>Technology
            <div className="absolute top-12 left-0 w-full h-[0.1em] bg-slate-100 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
