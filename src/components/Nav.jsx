import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=" flex lg:flex-row items-center justify-between lg:py-9 ">
      <div className="lg:ml-8 px-12">
        <img
          src="/assets/shared/logo.svg"
          alt="Logo"
          className="w-[80%] lg:w-full md:w-full"
        />
      </div>
      <div className="hidden lg:flex xl:flex absolute xl:w-[25%] xl:right-[50%] transform xl:-translate-x-[40%] xl:-translate-y-1/2 lg:w-auto h-[1px] bg-gray-500 z-20"></div>
      <div className="relative lg:backdrop-blur-xl bg-transparent py-10 lg:px-72 lg:z-10 ">
        <img
          src="/assets/shared/icon-hamburger.svg"
          className="lg:hidden md:hidden px-12"
        />
        <div className="hidden lg:flex md:flex md:gap-4 lg:flex-row lg:justify-start lg:items-start lg:gap-14 uppercase text-lg space-x-2 px-12 lg:tracking-widest ">
          <NavLink
            to="/"
            className="flex gap-2 cursor-pointer  relative group transform 300ms ease-in-out  "
            activeClassName="active"
          >
            <strong>00</strong>
            <span>Home</span>

            <div
              className={`absolute top-16 left-0 w-full h-[0.2em] bg-slate-100 transform ${
                location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'
              } transition-transform origin-left group-hover:scale-x-100`}
            ></div>
          </NavLink>

          <NavLink
            to="/destination/moon"
            className="flex gap-2 cursor-pointer relative group"
          >
            <strong>01</strong>
            <span>Destination</span>
            <div
              className={`absolute top-16 left-0 w-full h-[0.2em] bg-slate-100 transform ${
                location.pathname.includes('/destination')
                  ? 'scale-x-100'
                  : 'scale-x-0'
              } transition-transform origin-left group-hover:scale-x-100`}
            ></div>
          </NavLink>
          <NavLink
            to="/crew"
            className="flex gap-2 cursor-pointer relative group"
          >
            <strong>02</strong>
            <span>Crew</span>
            <div
              className={`absolute top-16 left-0 w-full h-[0.2em] bg-slate-100 transform ${
                location.pathname === '/crew' ? 'scale-x-100' : 'scale-x-0'
              } transition-transform origin-left group-hover:scale-x-100`}
            ></div>
          </NavLink>
          <NavLink
            to="/technology"
            className="flex gap-2 cursor-pointer relative group"
          >
            <strong>03</strong>Technology
            <div
              className={`absolute top-16 left-0 w-full h-[0.2em] bg-slate-100 transform ${
                location.pathname === '/technology'
                  ? 'scale-x-100'
                  : 'scale-x-0'
              } transition-transform origin-left group-hover:scale-x-100`}
            ></div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
