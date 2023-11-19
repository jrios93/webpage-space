import { NavLink } from 'react-router-dom'

const SubNav = () => {
  return (
    <div className="flex justify-between gap-10 uppercase text-md tracking-widest mb-12">
      <NavLink
        to="moon"
        className="flex gap-2 cursor-pointer relative group"
        activeClassName="active"
      >
        <span>Moon</span>
        <div
          className={`absolute top-10 left-0 w-full h-[0.2em] bg-slate-100 transform ${
            location.pathname == '/destination/moon'
              ? 'scale-x-100'
              : 'scale-x-0'
          } transition-transform origin-left group-hover:scale-x-100`}
        ></div>
      </NavLink>
      <NavLink to="mars" className="flex gap-2 cursor-pointer relative group">
        <span>Mars</span>
        <div
          className={`absolute top-10 left-0 w-full h-[0.2em] bg-slate-100 transform ${
            location.pathname == '/destination/mars'
              ? 'scale-x-100'
              : 'scale-x-0'
          } transition-transform origin-left group-hover:scale-x-100`}
        ></div>
      </NavLink>
      <NavLink to="europa" className="flex gap-2 cursor-pointer relative group">
        <span>Europa</span>
        <div
          className={`absolute top-10 left-0 w-full h-[0.2em] bg-slate-100 transform ${
            location.pathname == '/destination/europa'
              ? 'scale-x-100'
              : 'scale-x-0'
          } transition-transform origin-left group-hover:scale-x-100`}
        ></div>
      </NavLink>
      <NavLink to="titan" className="flex gap-2 cursor-pointer relative group">
        <span>Titan</span>
        <div
          className={`absolute top-10 left-0 w-full h-[0.2em] bg-slate-100 transform ${
            location.pathname == '/destination/titan'
              ? 'scale-x-100'
              : 'scale-x-0'
          } transition-transform origin-left group-hover:scale-x-100`}
        ></div>
      </NavLink>
    </div>
  )
}

export default SubNav
